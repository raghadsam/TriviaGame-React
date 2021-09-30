import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css";

export default function Report() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Report
      </Button>

      {/* Modal header */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header id="ModalTitle">
          <Modal.Title>Report this quiz</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}

        <Modal.Body>
          <label htmlFor="report">Title:</label>
          <br />
          <input
            type="text"
            name="report"
            placeholder="Title"
            className="ModalBody"
          />
          <br />
          <label htmlFor="blog">Message:</label>
          <br />
          <textarea
            name="blog"
            rows="5"
            cols="30"
            placeholder="Message"
            className="ModalBody"
          ></textarea>
        </Modal.Body>

        {/* Modal Buttons */}

        <Modal.Footer id="ModalFooter">
          <Button variant="outline-danger" id="SendButton">
            Send
          </Button>{" "}
          <Button variant="outline-success" id="CancelReport">
            Cancel
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
}
