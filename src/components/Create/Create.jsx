import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import QuestionsTable from "./QuestionsTable";
import Buttons from "./Buttons";
import { db } from "../../Firebase";

function Create() {
  const location = useLocation();
  const [quiz, setQuiz] = useState({
    name: "",
    rating: 0,
    difficulty: "difficulty",
    times_played: 0,
    category: "category",
    created_by: "username",
    number_of_ratings: 0,
    questions: [],
    posted: false,
    admin_message: "",
  });

  useEffect(() => {
    if (location.state) {
      db.collection("Quizzes")
        .doc(location.state)
        .get()
        .then((doc) => {
          setQuiz(doc.data());
        });
    }
  }, []);

  function getValues(category, name, difficulty) {
    setQuiz((prev) => ({
      ...prev,
      category: category,
      name: name,
      difficulty: difficulty,
    }));
    return quiz;
  }

  function getQuestion(question) {
    setQuiz((prev) => ({
      ...prev,
      questions: [...prev.questions, question],
    }));
  }

  function deleteQuestion(id) {
    let oldQuestions = [...quiz.questions];
    let newQuestions = oldQuestions.filter(
      (question) => id !== question.questionId
    );
    setQuiz((prev) => ({ ...prev, questions: newQuestions }));
  }

  return (
    <div>
      <h2 className="m-2">Edit Your Quiz</h2>
      <Header
        function={getValues}
        category={quiz.category}
        difficulty={quiz.difficulty}
        name={quiz.name}
      />
      <QuestionsTable
        questions={quiz.questions}
        deleteQuestion={deleteQuestion}
      />
      <Buttons getQuestion={getQuestion} quiz={quiz} />
    </div>
  );
}

export default Create;
