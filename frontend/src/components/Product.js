import React from "react";
import Rating from "./Rating";
import "./Product.css";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <div className="img-container">
          <img
            className="medium card__img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </Link>
      <div className="card__body">
        <Link to={`/product/${product._id}`}>
          <h2 className="card__title">{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="card__price">&euro; {product.price}</div>
      </div>
    </div>
  );
}
