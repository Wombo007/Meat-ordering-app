import { ShopifyProduct } from './types';

export function transformShopifyProduct(node: any): ShopifyProduct {
  try {
    const variant = node.variants.edges[0]?.node;
    const image = node.images.edges[0]?.node;

    if (!variant) {
      throw new Error(`No variant found for product: ${node.title}`);
    }

    return {
      id: variant.id,
      title: node.title,
      description: node.description || '',
      price: parseFloat(variant.price.amount),
      weight: `${variant.weight}${variant.weightUnit.toLowerCase()}`,
      image: image?.url || 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&h=600&fit=crop',
      productType: node.productType,
      handle: node.handle
    };
  } catch (error) {
    console.error('Error transforming product:', error);
    return null;
  }
}