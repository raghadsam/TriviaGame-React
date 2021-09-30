import React from "react";
import { Container } from "react-bootstrap";
import AddQuestion from "../Modals/AddQuestion";
import Post from "../Modals/Post";
import Unpost from "../Modals/Unpost";
import Cancel from "../Modals/Cancel";

function Buttons(props) {
  return (
    <Container>
      <div className="row d-flex justify-content-center">
        <div className="col-9">
          <AddQuestion function={props.getQuestion} />
          <Post quiz={props.quiz} />
          <Unpost />
          <Cancel />
        </div>
      </div>
    </Container>
  );
}

export default Buttons;
