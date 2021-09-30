import React from "react";
import { Container } from "react-bootstrap";

function Statistics() {
  return (
    <Container>
      <div className="row d-flex justify-content-center">
        <div className="col-4 grey my-1 mx-3 rounded-pill">
          <b>Average Score:</b> 9.2/10
        </div>
        <div className="col-4 grey my-1 mx-3 rounded-pill">
          <b>Your Quizes:</b> 4
        </div>
        <div className="col-4 grey my-1 mx-3 rounded-pill">
          <b>Number of Quiz Played:</b> 1432
        </div>
        <div className="col-4 grey my-1 mx-3 rounded-pill">
          <b>Average Player:</b> 150
        </div>
        <div className="col-4 grey my-1 mx-3 rounded-pill">
          <b>Favorite Genre:</b> Coding
        </div>
        <div className="col-4 grey my-1 mx-3 rounded-pill">
          <b>Average Rating:</b> 3.8
        </div>
      </div>
    </Container>
  );
}

export default Statistics;
