import { ADD_QUESTION, LOAD_ALL_QUESTIONS } from "../actions/types";

const initialState = {
  questions: [],
  currentQuestion: null,
  ownedQuestions: [],
  isAdded: false,
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
      };
    case LOAD_ALL_QUESTIONS:
      return {
        ...state,
        questions: payload,
        isAdded: false,
      };
    default:
      return state;
  }
};
