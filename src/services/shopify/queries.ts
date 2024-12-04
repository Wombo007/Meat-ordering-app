export const GET_COLLECTION_PRODUCTS = `
  query GetCollectionProducts($id: ID!) {
    collection(id: $id) {
      id
      title
      products(first: 250) {
        edges {
          node {
            id
            title
            description
            handle
            productType
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                  weight
                  weightUnit
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url(transform: {
                    maxWidth: 800
                    maxHeight: 800
                    crop: CENTER
                  })
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_CHECKOUT = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        webUrl
      }
      checkoutUserErrors {
        message
        field
        code
      }
    }
  }
`;