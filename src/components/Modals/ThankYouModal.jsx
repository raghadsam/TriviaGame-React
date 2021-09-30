import React from "react";
import { Modal, Button } from "react-bootstrap";
/* eslint-disable react/prop-types */

export default function ThankYouModal(props) {
  return (
    <Modal id="ModalPage" {...props}>
      <Modal.Body>
        <p>Thank you for submitting your message!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          className="Button"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
