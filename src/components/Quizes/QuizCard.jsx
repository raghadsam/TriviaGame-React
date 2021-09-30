import React, { useState } from "react";
import { difficulty } from "../../dummy_data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./quizcard.css";
import { Link } from "react-router-dom";
/* eslint-disable no-debugger, no-console */
// Please don't remove the comments; they help in breaking down the code and
// organizing it
function QuizCard(props) {
  const [id, setId] = useState(0);
  function diff_color(quiz) {
    if (quiz.difficulty === 0) {
      return (
        <span
          className="badge rounded-pill bg-success align-left"
          style={{ fontSize: "0.7rem" }}
        >
          {difficulty[quiz.difficulty]}
        </span>
      );
    } else if (quiz.difficulty === 2) {
      return (
        <span
          className="badge rounded-pill bg-danger align-left"
          style={{ fontSize: "0.7rem" }}
        >
          {difficulty[quiz.difficulty]}
        </span>
      );
    } else {
      return (
        <span
          className="badge rounded-pill bg-warning align-left"
          style={{ fontSize: "0.7rem" }}
        >
          {difficulty[quiz.difficulty]}
        </span>
      );
    }
  }
  return (
    <div
      className="row row-cols-1 row-cols-md-2 g-4 m-3 justify-content-between"
      style={{ fontSize: "0.5rem" }}
    >
      {props.quizzes.map((quiz, index) => {
        // eslint-disable-next-line no-console
        console.log(quiz);
        return (
          // Card output

          <div
            className="quizcard col-5 col-md-5 p-0 pt-3"
            key={index}
            id={quiz.id}
          >
            <Link to={"/question/" + quiz.id} style={{ all: "unset" }}>
              {/* First row in each card */}
              <div className="row d-flex justify-content-between p-0">
                {/* Quiz Name - first column in first row */}
                <div className="col-4 col-md-4 p-0">
                  <h5 className="quizTitle">{quiz.name}</h5>
                </div>
                {/* Rating - second column in first row */}
                <div className="col-4 col-md-4 d-flex p-0 justify-content-center">
                  <div
                    className="text-center star p-0"
                    style={{ fontSize: "1rem" }}
                  >
                    &#9733;
                  </div>
                  <p className="numplayers">{quiz.rating}</p>
                </div>
              </div>
              {/* End of first row in each card */}
              {/* Second row in each card */}
              <div className="row d-flex justify-content-between p-0">
                {/* Difficulty level */}
                <div className="col-4 col-md-4 p-0">
                  <h6>{diff_color(quiz)}</h6>
                </div>
              </div>
              {/* End of second row in each card */}
              {/* Third row in each card */}
              <div className="row d-flex justify-content-between p-0 justify-content-start">
                <div className="col-4 col-md-4">
                  <p className="numplayers">Players: {quiz.players}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default QuizCard;
