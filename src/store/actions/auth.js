import API from "../../utils/API";
import { USER_LOADED } from "./types";

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
