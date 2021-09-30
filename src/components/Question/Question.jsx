import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";
import InputGroup from "react-bootstrap/InputGroup";
import "./Question.css";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { useParams, useHistory } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
/* eslint-disable no-debugger, no-console */

export default function QuizHandler() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quiz, setQuiz] = useState({});
  const [questionNumber, setQuestionNumber] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const { quizId } = useParams();
  const history = useHistory();
  const [key, setKey] = useState(0);

  const getQuiz = async () => {
    const response = db.collection("Quizzes");
    const doc = await response.doc(quizId).get();
    const result = doc.data();
    //console.log(loading);
    setQuiz(result);
    console.log(result);
    console.log(quiz);
    console.log("id=" + quizId);
    console.log(quiz.questions);
    setLoading(false);
    console.log(loading);
  };

  useEffect(() => {
    getQuiz();
  }, [loading]);

  const handleClick = (isCorrect) => {
    setKey((prevKey) => prevKey + 1);

    const nextQuestion = currentQuestion + 1;
    if (isCorrect === true) {
      setScore(score + 1);
      console.log(score);
    }

    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setQuestionNumber(false);
    }
  };

  const letters = ["A:", "B:", "C:", "D:"];

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="quiz">
          {showScore ? (
            history.push({
              pathname: "/result",
              state: {
                score: score,
                quizId: quizId,
              },
            })
          ) : (
            <Container className="Cont">
              <Link to="/quizzes" style={{ all: "unset" }}>
                <CloseButton id="closeButton" />
              </Link>
              <div className="timer-wrapper">
                <CountdownCircleTimer
                  className="timer2"
                  key={key}
                  strokeWidth={6}
                  size={60}
                  isPlaying
                  duration={30}
                  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                  onComplete={() => [true, handleClick()]}
                >
                  {renderTime}
                </CountdownCircleTimer>
              </div>
              <div>
                {questionNumber ? (
                  <div className="QuesNb">
                    Question <br />
                    {currentQuestion + 1}/{quiz.questions.length}
                  </div>
                ) : (
                  <div>you reached the end of the quiz</div>
                )}
              </div>

              <div className="question">
                {quiz.questions[currentQuestion].questionText}
              </div>

              <div className="Answer">
                {quiz.questions[currentQuestion].questionOptions
                  .sort(() => Math.random() - 0.5)
                  .map((questionOption, index) => (
                    <Container
                      className="Container2"
                      as={ButtonGroup}
                      key={index}
                    >
                      {" "}
                      <div className="QuesDiv">
                        <Button
                          variant="warning"
                          className="But"
                          index={index}
                          onClick={() => handleClick(questionOption.isCorrect)}
                        >
                          <InputGroup.Text id="basic-addon1">
                            {letters[index]}
                          </InputGroup.Text>
                          {questionOption.answerText}
                        </Button>{" "}
                      </div>
                    </Container>
                  ))}
              </div>
            </Container>
          )}
        </div>
      )}
    </>
  );
}
