import { loginStart, loginSuccess, loginFailure, logOut } from "./memberSlice";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  //console.log(user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/members/login", user);
    //console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logoutMember = async (dispatch) => {
  try {
    dispatch(logOut());
  } catch (error) {}
};
