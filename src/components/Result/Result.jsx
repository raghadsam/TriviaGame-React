import React from "react";
import Histogram from "./Histogram";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Header";
import UserImg from "./UserImg";
import ScoreSummary from "./ScoreSummary";
import ResultButtons from "./ResultButtons";
import ResultSignUp from "./ResultSignUp";
function Result() {
  return (
    <Container className="p-5">
      <Header />
      <div className="row justify-content-center ">
        <div className="col-6 col-md-6 my-auto">
          <UserImg />
          <br />
          <br />
          <ScoreSummary />
        </div>
        <div className="col-6 col-md-6 center">
          <Histogram />
        </div>
        <ResultButtons />
        <ResultSignUp />
      </div>
    </Container>
  );
}

export default Result;
