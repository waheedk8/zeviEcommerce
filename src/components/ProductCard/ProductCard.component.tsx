import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./ProductCard.scss";

export interface ProductCardProps {
  img: string;
  title: string;
  star: number;
  reviews: number;
  prevPrice: number;
  newPrice: number;
}

const ProductCard = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}: ProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const starCount = Math.round(star);
  const starIcons = Array.from({ length: starCount }, (_, index) => (
    <AiFillStar key={index} color="gold" />
  ));

  return (
    <div className="card-container">
      <section className="card">
        <span onClick={toggleFavorite} className="" style={{ float: "right" }}>
          {isFavorited ? <FaHeart color="red" /> : <FaRegHeart />}
        </span>
        <div className="card-image-container">
          <img
            src={img}
            alt={title}
            // height="360px"
            // width="280px"
            className="card-img"
          />
          <div className="hover-overlay">
            <button className="view-product-button">View Product</button>
          </div>
        </div>
        <div className="">
          <h3 style={{ color: "black" }}>{title}</h3>

          <div>
            <del style={{ color: "grey", fontWeight: "bold" }}>
              Rs{Math.round(prevPrice)}
            </del>{" "}
            <span style={{ color: "royalblue", fontWeight: "bold" }}>
              Rs{Math.round(newPrice)}
            </span>
          </div>

          <section
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            {starIcons}
            <span
              style={{
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              ({reviews})
            </span>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
