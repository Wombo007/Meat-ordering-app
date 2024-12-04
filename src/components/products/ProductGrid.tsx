import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductCategory } from './ProductCategory';
import { shopifyClient } from '../../services/shopify/client';
import { ShopifyProduct } from '../../services/shopify/types';

interface ProductGridProps {
  collectionId: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ collectionId }) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedProducts = await shopifyClient.getCollectionProducts(collectionId);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [collectionId]);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products available.</p>
      </div>
    );
  }

  // Group products by type
  const productsByType = products.reduce((acc, product) => {
    const type = product.productType || 'Other';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(product);
    return acc;
  }, {} as Record<string, ShopifyProduct[]>);

  return (
    <div className="space-y-12">
      {Object.entries(productsByType).map(([category, categoryProducts]) => (
        <ProductCategory key={category} title={category}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ProductCategory>
      ))}
    </div>
  );
};