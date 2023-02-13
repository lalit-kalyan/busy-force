import {
  loginStart,
  loginSuccess,
  loginFailure,
  adminLogOut,
} from "./adminSlice";
import { publicRequest } from "../requestMethods";

export const adminLogin = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/admin/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logoutAdmin = async (dispatch) => {
  try {
    dispatch(adminLogOut());
  } catch (error) {
    console.log(error);
  }
};
