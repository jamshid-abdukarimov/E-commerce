import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { showModalAction } from "../../redux/reducers/productsReducer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="card product" key={product.id}>
      <img
        onClick={(e) => {
          dispatch(showModalAction(e.target.src));
        }}
        className="card-img-top"
        src={product.thumbnail}
        alt="Card image"
      />
      <div className="card-body">
        <h5 className="card-title mb-2">{product.title}</h5>
        <p className="card-text">
          {product.description.length > 100
            ? `${product.description.slice(0, 100)}...`
            : product.description}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <span>{product.price}$</span>
        <NavLink to={`/item/${product.id}`} className="card-link">
          See more
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
