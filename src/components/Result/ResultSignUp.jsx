import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ResultSignUp() {
  return (
    <div className="row justify-content-center">
      <h3>If you wish to save your score, please sign up</h3>
      <br />
      <br />
      <Button id="SignInButton">Sign Up</Button>
    </div>
  );
}

export default ResultSignUp;
