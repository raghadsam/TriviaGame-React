import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";

import "./Message.css";

export default function MessageModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="ModalButton" onClick={handleShow}>
        notification
      </button>

      <Modal id="ModalPage" show={show} onHide={handleClose} animation={false}>
        <Modal.Title className="Modals">
          This quiz was unposted by the admin.
        </Modal.Title>
        <Modal.Body bsPrefix="modal-body" className="Modals">
          Your quiz has some inaccurate or inappropriate content.
        </Modal.Body>
        <Modal.Footer className="Modals">
          <b>Edit your quiz to be able to repost it.</b>
        </Modal.Footer>
      </Modal>
    </>
  );
}
