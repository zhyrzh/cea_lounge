import API from "../../utils/API";
import { USER_LOADED, LOGOUT_USER } from "./types";

export const login = (loginDetails) => async (dispatch) => {
  try {
    const { data } = await API.post("/auth", loginDetails);

    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const { data } = await API.delete("/auth");
    dispatch({
      type: LOGOUT_USER,
      payload: data,
    });
  } catch (error) {}
};
