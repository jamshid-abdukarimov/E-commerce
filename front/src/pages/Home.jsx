import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import SearchBlock from "../components/Search/Search";
import { getProducts } from "../api/productsApi";
import Pagination from "../components/Pagination/Pagination";
import {
  getProductsAction,
  getTotalAction,
} from "../redux/reducers/productsReducer";

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.products.category);
  const searchValue = useSelector((state) => state.products.searchValue);
  const total = useSelector((state) => state.products.total);
  const currentPage = useSelector((state) => state.products.currentPage);
  const limit = useSelector((state) => state.products.limit);
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
      <Header />
      <div className="container">
        <SearchBlock />
        <Products />
        <Pagination pagesCount={pagesCount} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
