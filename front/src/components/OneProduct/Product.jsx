import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/productsApi";
import * as productsActions from "../../redux/reducers/productsReducer";
import { Header } from "../";
import "./product.scss";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { id } = useParams();
  useEffect(
    () =>
      getProduct(id).then(({ data }) =>
        dispatch(productsActions.getOneProductAction(data))
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <Header />
      <div className="container my-4">
        {product && (
          <div className="product row">
            <div className="col-md-6 text-center">
              <img
                onClick={(e) => {
                  dispatch(productsActions.showModalAction(e.target.src));
                }}
                className="w-75 mb-2"
                src={product.thumbnail}
                alt="main img"
              />
              <div className="product-images w-100 d-flex gap-2 flex-wrap">
                {product.images.map((image, index) => (
                  <img
                    onClick={(e) => {
                      dispatch(productsActions.showModalAction(e.target.src));
                    }}
                    className="img-thumbnail"
                    src={image}
                    key={index}
                    alt="jpg"
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="brand">
                <h3 className="d-inline text-decoration-underline">Brand: </h3>
                <h4 className="d-inline">{product.brand}</h4>
              </div>
              <div className="title my-3">
                <h3 className="d-inline text-decoration-underline">Title: </h3>
                <h4 className="d-inline">{product.title}</h4>
              </div>
              <div className="category my-3">
                <h4 className="d-inline text-decoration-underline">
                  Category:{" "}
                </h4>
                <h5 className="d-inline">{product.category}</h5>
              </div>
              <div className="description my-3">
                <h4 className="d-inline text-decoration-underline">
                  Description:{" "}
                </h4>
                <h5 className="d-inline">{product.description}</h5>
              </div>
              <div className="discount-percentage my-3">
                <h5 className="d-inline text-decoration-underline">
                  Discount Persentage:{" "}
                </h5>
                <p className="d-inline fw-bolder">
                  {product.discountPercentage}%
                </p>
              </div>
              <div className="price my-3">
                <h5 className="d-inline text-decoration-underline">Price: </h5>
                <p className="d-inline fw-bolder">{product.price}$</p>
              </div>
              <div className="rating my-3">
                <h5 className="d-inline text-decoration-underline">Rating: </h5>
                <p className="d-inline fw-bolder">{product.rating}</p>
              </div>
              <div className="stock my-3">
                <h5 className="d-inline text-decoration-underline">Stock: </h5>
                <p className="d-inline fw-bolder">{product.stock}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
