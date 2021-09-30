import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import QuizCard from "./QuizCard";
import { Container } from "react-bootstrap";

function QuizGrid(props) {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setfilteredQuizzes] = useState([]);

  const fetchQuizzes = async () => {
    const response = db.collection("Quizzes");
    const data = await response.get();
    let fetchingArray = [];
    data.docs.forEach((quiz) => {
      fetchingArray.push({ ...quiz.data(), id: quiz.id });
    });
    setQuizzes(fetchingArray);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  useEffect(() => {
    let filtered = quizzes.filter(
      (quiz) => quiz.category === props.filters.category
    );
    setfilteredQuizzes(filtered);
  }, [props.filters.category, quizzes]);

  return (
    <div>
      <Container>
        <QuizCard quizzes={filteredQuizzes} />
      </Container>
    </div>
  );
}

export default QuizGrid;
