import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../store/actions/questions";

const Question = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestion(1));
  }, []);

  const questionDetails = useSelector(
    (state) => state.question.currentQuestion
  );

  const question = questionDetails?.question;
  const answers = questionDetails?.answers[0];
  const likes = questionDetails?.likes;
  const content = (
    <div
      style={{
        display: "flex",
        backgroundColor: "pink",
        marginTop: "0",
      }}
    >
      <div>
        <h1>{question?.title}</h1>
        <h2>{question?.author_name}</h2>
        <p>{question?.created_at}</p>
        <hr />
        <p>{question?.question}</p>
      </div>
      <div>{answers?.answer}</div>
      {/* {console.log(answers?.answer, "answers")} */}
    </div>
  );
  return (
    <Fragment>
      {!questionDetails?.question ||
      !questionDetails?.answers ||
      !questionDetails?.likes
        ? null
        : content}
    </Fragment>
  );
};

export default Question;
