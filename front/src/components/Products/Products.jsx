import React from "react";
import "./products.scss";
import png from "../../assets/images/products.png";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="products-wrapper py-4">
      <div className="products-title mb-3 d-flex">
        <img src={png} alt="png" />
        <div className="ms-2">
          <h3>Mahsulotlar</h3>
          <p>
            Bizning internet magazinimiz bilan siz o'z <br /> mahsulotlaringizni
            tez va arzon olishingiz mumkin.
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
            Products is not found
          </h3>
        )}
      </div>
    </div>
  );
};

export default Products;
