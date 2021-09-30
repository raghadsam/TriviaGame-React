import React from "react";
import DeleteModal from "../Modals/Delete";

function Row(props) {
  let { questionText, questionOptions, questionId } = props.question;

  const correctAnswer = questionOptions.filter((option) => option.isCorrect);
  const wrongAnswer = questionOptions.filter((option) => !option.isCorrect);

  return (
    <div className="row m-1">
      <div className="col-6 m-1 grey round-left p-1 text-center">
        {questionText}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {correctAnswer[0].answerText}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {wrongAnswer[0].answerText}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {wrongAnswer[1].answerText}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {wrongAnswer[2].answerText}
      </div>
      <div className="col-1 m-1 p-1 grey round-right text-center">
        <DeleteModal deleteQuestion={props.deleteQuestion} id={questionId} />
      </div>
    </div>
  );
}

export default Row;
