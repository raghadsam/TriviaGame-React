import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import "./AddQuestion.css";

export default function AddQuestion(props) {
  const [show, setShow] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    setShow(false);
    props.function({
      questionId: Date.now(),
      questionText: questionText,
      questionOptions: [
        { answerText: correctAnswer, isCorrect: true },
        { answerText: answer1, isCorrect: false },
        { answerText: answer2, isCorrect: false },
        { answerText: answer3, isCorrect: false },
      ],
    });
  };

  return (
    <>
      <button
        className="button btn-outline-primary col-2 m-1"
        onClick={handleShow}
      >
        Add Question
      </button>

      <Modal id="ModalPage" show={show} onHide={handleClose} animation={false}>
        <Modal.Body bsPrefix="modal-body" className="Modals">
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Question</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setQuestionText(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Form.Label>Correct Answer:</Form.Label>

          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
            <InputGroup.Text
              className="Green"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
          <Form.Label>Incorrect Answers:</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setAnswer1(e.target.value)}
            />
            <InputGroup.Text
              className="Red"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setAnswer2(e.target.value)}
            />
            <InputGroup.Text
              className="Red"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setAnswer3(e.target.value)}
            />
            <InputGroup.Text
              className="Red"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer className="Modals">
          <Button
            variant="outline-danger"
            className="Button"
            onClick={handleSave}
          >
            Save
          </Button>{" "}
          <Button
            variant="outline-success"
            className="Button"
            onClick={handleClose}
          >
            Cancel
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
}
