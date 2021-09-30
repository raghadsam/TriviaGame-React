import React, { useState } from "react";
import Rate from "./Rate";
import Modal from "react-bootstrap/Modal";
//import {  } from "react-bootstrap-icons";

function Rating(props) {
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    props.deleteQuiz();
    handleClose();
  };

  return (
    <>
      {/* <button
        className="button btn-outline-danger col-2 m-1"
        onClick={handleShow}
      >
       rate me
      </button> */}

      <Modal id="ModalPage" show={show} onHide={handleClose} animation={false}>
        <Modal.Body bsPrefix="modal-body" className="Modals">
          Rate this quiz
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Rating;
