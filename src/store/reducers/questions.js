import {
  ADD_QUESTION,
  LOAD_ALL_QUESTIONS,
  LOAD_QUESTION,
} from "../actions/types";

const initialState = {
  questions: [],
  currentQuestion: null,
  ownedQuestions: [],
  isAdded: false,
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_QUESTION:
      const currentQuestons = state.questions;
      currentQuestons.push(payload);
      return {
        ...state,
        questions: currentQuestons,
        isAdded: true,
        loading: false,
      };
    case LOAD_ALL_QUESTIONS:
      return {
        ...state,
        questions: payload,
        isAdded: false,
      };
    case LOAD_QUESTION:
      return {
        ...state,
        currentQuestion: payload,
        loading: false,
      };
    default:
      return state;
  }
};
