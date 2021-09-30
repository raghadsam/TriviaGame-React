import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function ResultButtons() {
  const location = useLocation();

  return (
    <div className="row justify-content-between p-5 text-center">
      <div className="col-6 col-md-6">
        <Link
          to={"/question/" + location.state.quizId}
          style={{ all: "unset" }}
        >
          <Button id="SignInButton">PlayAgain</Button>
        </Link>
      </div>
      <div className="col-6 col-md-6">
        <Link to="/" style={{ all: "unset" }}>
          <Button id="SignInButton">Done</Button>
        </Link>
      </div>
    </div>
  );
}

export default ResultButtons;
