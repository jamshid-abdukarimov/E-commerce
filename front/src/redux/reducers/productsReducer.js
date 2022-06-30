const initialState = {
  products: [],
  categories: [],
  category: "",
  searchValue: "",
  product: null,
  total: 0,
  currentPage: 1,
  imgUrl: "",
  modalWindow: false,
  overflow: false,
  limit: 10,
};

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
const GET_CATEGORIES = "GET_CATEGORIES";
const SET_CATEGORY = "SET_CATEGORY";
const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
const GET_TOTAL = "GET_TOTAL";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_LIMIT = "SET_LIMIT";
const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.data };
    case GET_CATEGORIES:
      return { ...state, categories: action.data };
    case SET_CATEGORY:
      return { ...state, category: action.data };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.data };
    case GET_ONE_PRODUCT:
      return { ...state, product: action.data };
    case GET_TOTAL:
      return { ...state, total: action.data };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.data };
    case SET_LIMIT:
      return { ...state, limit: action.data };
    case SHOW_MODAL:
      return {
        ...state,
        modalWindow: true,
        overflow: true,
        imgUrl: action.data,
      };
    case HIDE_MODAL:
      return { ...state, modalWindow: false, overflow: false, imgUrl: "" };
    default:
      return state;
  }
};

export const getProductsAction = (data) => ({ type: GET_PRODUCTS, data });
export const getCategoriesAction = (data) => ({ type: GET_CATEGORIES, data });
export const setCategoryAction = (data) => ({ type: SET_CATEGORY, data });
export const setSearchAction = (data) => ({ type: SET_SEARCH_VALUE, data });
export const getOneProductAction = (data) => ({ type: GET_ONE_PRODUCT, data });
export const getTotalAction = (data) => ({ type: GET_TOTAL, data });
export const setCurrentPageAction = (data) => ({
  type: SET_CURRENT_PAGE,
  data,
});
export const setLimitAction = (data) => ({ type: SET_LIMIT, data });
export const showModalAction = (data) => ({ type: SHOW_MODAL, data });
export const hideModalAction = () => ({ type: HIDE_MODAL });

export default productsReducer;
