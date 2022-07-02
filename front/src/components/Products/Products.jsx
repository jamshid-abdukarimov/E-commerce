import React from "react";
import "./products.scss";
import png from "../../assets/images/products.png";
import { useSelector } from "react-redux";
import { ProductCard } from "../";

const Products = () => {
  const { products, category } = useSelector((state) => state.products);
  return (
    <div className="products-wrapper py-4">
      <div className="products-title mb-3 d-flex">
        <img src={png} alt="png" />
        <div className="ms-2">
          <h3 className="text-capitalize">
            {category ? category : "All Products"}
          </h3>
          <p>
            You can get any products quickly
            <br /> and cheaply in our online magazine.
          </p>
        </div>
      </div>
      <div className="products justify-content-center justify-content-sm-start">
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h3 className="text-center w-100 text-danger">
            Product is not found!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Products;
