import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, getAllQuestion } from "../../store/actions/questions";

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuestion());
  }, []);

  const [questionDetails, setQuestionDetails] = useState({
    title: "",
    question: "",
  });

  const questions = useSelector((state) => state.question);
  const onChangeHandler = (event) => {
    setQuestionDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="add-post-container">
      {console.log(questions)}
      <h1>Testing</h1>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={onChangeHandler}
      />
      <input
        name="question"
        type="text"
        placeholder="question"
        onChange={onChangeHandler}
      />
      <button onClick={() => dispatch(addQuestion(questionDetails))}>
        Submit
      </button>
      <button>Cancel</button>
    </div>
  );
};

export default index;
