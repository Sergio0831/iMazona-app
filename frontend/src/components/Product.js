import React from "react";
import Rating from "./Rating";
import "./Product.css";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card__body">
        <a href={`/product/${product._id}`}>
          <h2 className="card__title">{product.name}</h2>
        </a>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="card__price">&euro; {product.price}</div>
      </div>
    </div>
  );
}
