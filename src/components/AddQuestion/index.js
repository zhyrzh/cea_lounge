import React, { useState } from "react";
import Axios from "../../utils/API";

const index = () => {
  const [questionDetails, setQuestionDetails] = useState({
    title: "",
    question: "",
  });

  const submitQuestion = () => {
    Axios.post("/question", questionDetails);
  };

  const onChangeHandler = (event) => {
    setQuestionDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="add-post-container">
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
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
};

export default index;
