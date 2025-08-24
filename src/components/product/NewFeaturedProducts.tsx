'use client';

import { Product } from "@/types/product";
import NewProductCard from "./NewProductCard";

interface NewFeaturedProductsProps {
  title: string;
  products: Product[];
}

export default function NewFeaturedProducts({ title, products }: NewFeaturedProductsProps) {
  return (
    <section className="new-featured-products">
      <div className="new-featured-products__header">
        <h2 className="new-featured-products__title">{title}</h2>
      </div>
      <div className="new-featured-products__grid">
        {products.map((product) => (
          <NewProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
