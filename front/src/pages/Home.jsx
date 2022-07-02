import React, { useEffect } from "react";
import * as Components from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api/productsApi";
import {
  getProductsAction,
  getTotalAction,
} from "../redux/reducers/productsReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { total, category, searchValue, currentPage, limit } = useSelector(
    (state) => state.products
  );
  const offset = (currentPage - 1) * limit;
  const pagesCount = total && Math.ceil(total / limit);

  useEffect(() => {
    getProducts(searchValue, category, limit, offset).then(({ data }) => {
      dispatch(getProductsAction(data.products));
      dispatch(getTotalAction(data.count));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, offset, currentPage, limit]);

  return (
    <div>
      <Components.Header />
      <div className="container">
        <Components.SearchBlock />
        <Components.Products />
        <Components.Pagination pagesCount={pagesCount} />
      </div>
      <Components.Footer />
    </div>
  );
};

export default Home;
