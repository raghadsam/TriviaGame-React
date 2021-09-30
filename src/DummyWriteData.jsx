import React, { useState, useEffect } from "react";
import { db } from "./Firebase";
import { quizzes } from "./dummy_data";

function DummyWriteData() {
  const quizzesRef = db.collection("Quizzes");
  const [quizzesState, setQuizzesState] = useState([]);

  function writeData() {
    quizzes.forEach((quiz, index) => quizzesRef.add(quizzes[index]));
  }

  const fetchQuizzes = async () => {
    const response = db.collection("Quizzes");
    const data = await response.get();
    data.docs.forEach((quiz) => {
      // eslint-disable-next-line no-console
      console.log(quiz.data());
      setQuizzesState((prev) => [...prev, quiz.data()]);
    });
  };

  return (
    <>
      <button onClick={writeData}>Add Quiz</button>
    </>
  );
}

export default DummyWriteData;
