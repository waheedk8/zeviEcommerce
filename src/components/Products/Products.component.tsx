import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import "./products.scss";
import Fallback from "../EmptyPage/Fallback.component";

interface filteredProduct {
  id: number;
  image: string;
  title: string;
  rating: { rate: number; count: number };
  price: number;
}

export interface ProductsProps {
  filteredProducts: filteredProduct[] | [];
}

const Products = ({ filteredProducts }: ProductsProps) => (
  <div className="products-container">
    {filteredProducts.length > 0 ? (
      filteredProducts.map(({ id, image, title, rating, price }) => (
        <ProductCard
          key={id}
          img={image}
          title={title}
          star={rating.rate}
          reviews={rating.count}
          prevPrice={price}
          newPrice={price}
        />
      ))
    ) : (
      <Fallback />
    )}
  </div>
);

export default Products;
