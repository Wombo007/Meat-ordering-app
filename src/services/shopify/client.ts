import { shopifyConfig } from './config';
import { ShopifyLineItem, ShopifyProduct } from './types';
import { GET_COLLECTION_PRODUCTS, CREATE_CHECKOUT } from './queries';
import { transformShopifyProduct } from './transforms';

class ShopifyClient {
  private async fetchGraphQL(query: string, variables = {}) {
    try {
      const response = await fetch(`https://${shopifyConfig.domain}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': shopifyConfig.storefrontAccessToken
        },
        body: JSON.stringify({ query, variables })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (json.errors) {
        console.error('GraphQL Errors:', json.errors);
        throw new Error(json.errors[0].message);
      }

      return json.data;
    } catch (error) {
      console.error('GraphQL request failed:', error);
      throw error;
    }
  }

  async getCollectionProducts(collectionId: string): Promise<ShopifyProduct[]> {
    try {
      const data = await this.fetchGraphQL(GET_COLLECTION_PRODUCTS, { id: collectionId });

      if (!data?.collection?.products?.edges) {
        return [];
      }

      return data.collection.products.edges
        .map((edge: any) => transformShopifyProduct(edge.node))
        .filter(Boolean);
    } catch (error) {
      console.error('Error fetching collection products:', error);
      throw error;
    }
  }

  async createCheckout(lineItems: ShopifyLineItem[]): Promise<string> {
    try {
      const data = await this.fetchGraphQL(CREATE_CHECKOUT, {
        input: {
          lineItems: lineItems.map(item => ({
            variantId: item.id,
            quantity: item.quantity,
            customAttributes: item.customAttributes
          }))
        }
      });

      if (data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
        throw new Error(data.checkoutCreate.checkoutUserErrors[0].message);
      }

      const checkoutUrl = data.checkoutCreate.checkout.webUrl;
      return shopifyConfig.customDomain 
        ? checkoutUrl.replace(shopifyConfig.domain, shopifyConfig.customDomain)
        : checkoutUrl;
    } catch (error) {
      console.error('Checkout creation failed:', error);
      throw new Error('Failed to create checkout. Please try again.');
    }
  }
}

export const shopifyClient = new ShopifyClient();