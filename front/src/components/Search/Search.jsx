import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../api/productsApi";
import "./search.scss";
import {
  getCategoriesAction,
  getProductsAction,
  getTotalAction,
  setCategoryAction,
  setCurrentPageAction,
  setLimitAction,
  setSearchAction,
} from "../../redux/reducers/productsReducer";

const SearchBlock = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const category = useSelector((state) => state.products.category);
  const searchValue = useSelector((state) => state.products.searchValue);
  const currentPage = useSelector((state) => state.products.currentPage);
  const limit = useSelector((state) => state.products.limit);
  const offset = (currentPage - 1) * limit;

  useEffect(
    () =>
      getProducts(searchValue, category, limit, offset).then(({ data }) => {
        dispatch(getProductsAction(data.products));
        dispatch(getTotalAction(data.count));
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue, category]
  );

  useEffect(() => {
    getCategories().then(({ data }) => dispatch(getCategoriesAction(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const limits = [5, 10, 15, 20];
  return (
    <div className="my-4 d-flex justify-content-end row">
      <div className="col-md-6 d-flex">
        <div className="form-group">
          <select
            onChange={(e) => {
              dispatch(setLimitAction(e.target.value));
              dispatch(setCurrentPageAction(1));
            }}
            defaultValue={limit}
            className="form-select"
          >
            {limits.map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group ms-2">
          <select
            defaultValue={category}
            onChange={(e) => {
              dispatch(setCategoryAction(e.target.value));
              dispatch(setCurrentPageAction(1));
            }}
            className="form-select"
          >
            <option value="">All products</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-md-6 mt-2 mt-md-0">
        <div className="input-group w-100 position-relative">
          <input
            value={searchValue}
            onChange={(e) => {
              dispatch(setSearchAction(e.target.value));
              dispatch(setCurrentPageAction(1));
            }}
            placeholder="Search..."
            type="text"
            className="form-control rounded-3 ps-5"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
