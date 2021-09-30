import React, { useState, useEffect } from "react";
import QuizCard from "../Quizes/QuizCard";
import { db } from "../../Firebase";
import { Container } from "react-bootstrap";

function UserQuizzes(props) {
  const [quizzes, setQuizzes] = useState([]);
  const userQuizId = props.userQuizzes;

  useEffect(() => {
    userQuizId.forEach((id) => {
      db.collection("Quizzes")
        .doc(id)
        .get()
        .then((doc) => {
          setQuizzes((prev) => [...prev, { ...doc.data(), id: doc.id }]);
        });
    });
  }, [props.userQuizzes]);

  return (
    <Container>
      <div className="my-3 mx-2">
        <div className="row m-1">
          <div className="grey m-1 col-md-2 rounded-pill text-center bold align-middle">
            <h5 className="m-1 ">Your Quizzes:</h5>
          </div>
        </div>
        <QuizCard quizzes={quizzes} />
      </div>
    </Container>
  );
}

export default UserQuizzes;
