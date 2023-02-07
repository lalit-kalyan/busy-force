import { loginStart, loginSuccess, loginFailure } from "./adminSlice";
import { publicRequest } from "../requestMethods";

export const adminLogin = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/admin/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
