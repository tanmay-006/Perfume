'use client';

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface NewProductCardProps {
  product: Product;
}

export default function NewProductCard({ product }: NewProductCardProps) {
  return (
    <div className="new-product-card">
      <Link href={`/products/${product.id}`}>
        <div className="new-product-card__image-container">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="new-product-card__image"
          />
        </div>
        <div className="new-product-card__info">
          <h3 className="new-product-card__name">{product.name}</h3>
          <p className="new-product-card__price">₹{product.price}</p>
        </div>
      </Link>
      <button className="new-product-card__add-to-cart">Add to Cart</button>
    </div>
  );
}
