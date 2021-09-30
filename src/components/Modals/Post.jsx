import { React, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Post.css";

export default function Post(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePost = () => {
    db.collection("Quizzes").add({ ...props.quiz, posted: true });
    handleClose();
    // eslint-disable-next-line no-console
    console.log("your quiz is now Posted");
  };

  return (
    <>
      <button
        className="button btn-outline-primary col-2 m-1"
        onClick={handleShow}
      >
        Post
      </button>

      <Modal id="ModalPage" show={show} onHide={handleClose} animation={false}>
        <Modal.Body bsPrefix="modal-body" className="Modals">
          Post Quiz?
        </Modal.Body>
        <Modal.Footer className="Modals">
          <Button
            variant="outline-danger"
            className="Button"
            onClick={handlePost}
          >
            <Link to="/" style={{ all: "unset" }}>
              Post
            </Link>
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
