import { axiosEmployee } from "../../api/api";

export const getRoles = async (dispatch, limit, page, setPagesCount) => {
  const response = await axiosEmployee.get(`/role?limit=${limit}&page=${page}`);
  setPagesCount(Math.ceil(response.data.data.total / limit));
  dispatch({ type: "ADD_ROLES", data: response.data.data.data });
};
