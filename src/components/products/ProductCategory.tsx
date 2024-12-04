import React from 'react';

interface ProductCategoryProps {
  title: string;
  children: React.ReactNode;
}

export const ProductCategory: React.FC<ProductCategoryProps> = ({
  title,
  children,
}) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#1d1d1b] mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};