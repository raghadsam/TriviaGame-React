import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ReactSVG } from "react-svg";
import Trash from "../../assets/trash.svg";

import "./Delete.css";

export default function DeleteQuestion(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    setShow(false);
    props.deleteQuestion(props.id);
  };

  return (
    <>
      <button
        style={{ border: "none", background: "transparent" }}
        onClick={handleShow}
      >
        <ReactSVG src={Trash} />
      </button>

      <Modal id="ModalPage" show={show} onHide={handleClose} animation={false}>
        <Modal.Body bsPrefix="modal-body" className="Modals">
          Delete this question?
        </Modal.Body>
        <Modal.Footer className="Modals">
          <Button
            variant="outline-danger"
            className="Button"
            onClick={handleDelete}
          >
            Delete
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
