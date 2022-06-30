import axios from "axios";
export const axiosProducts = axios.create({
  baseURL: "http://localhost:3001/api",
});

// GET Products
export const getProducts = async (searchValue, category, limit, offset) => {
  return await axiosProducts.get(
    `/product?name=${searchValue}&category=${category}&limit=${limit}&offset=${offset}`
  );
};

// GET Categories
export const getCategories = async () => {
  return await axiosProducts.get("/category");
  // .then(({ data }) => dispatch(getCategoriesAction(data)));
};

// GET Product
export const getProduct = async (id) => {
  return await axiosProducts.get(`/product/${id}`);
};
