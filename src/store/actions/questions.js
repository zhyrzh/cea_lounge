import API from "../../utils/API";
import { ADD_QUESTION, LOAD_ALL_QUESTIONS } from "./types";

export const addQuestion = (questionDetails) => async (dispatch) => {
  try {
    const { data } = await API.post("/question", questionDetails);
    dispatch({
      type: ADD_QUESTION,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getAllQuestion = () => async (dispatch) => {
  try {
    const { data } = await API.get("/question");
    dispatch({
      type: LOAD_ALL_QUESTIONS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
