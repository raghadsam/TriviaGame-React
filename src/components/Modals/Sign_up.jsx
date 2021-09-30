import React, { useRef, useState, useEffect } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modals.css";
import userGif from "./images/user.gif";
import emailPic from "./images/email.png";
import password from "./images/padlock.png";
import gmail from "./images/gmail.png";
import facebook from "./images/facebook.png";
import { auth, google } from "../../Firebase";
/* eslint-disable no-debugger, no-console */

function Sign_up(props) {
  const [show, setShow] = useState(props.show);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const comfRef = useRef(null);
  const userRef = useRef("");

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        if (err.code == "auth/invalid-email") {
          setEmailError(err.message);
        } else if (err.code == "auth/weak-password") {
          setPasswordError(err.message);
        } else {
          setGeneralError(err.message);
        }
      });
  };

  const joinUsingGoogle = () => {
    auth.signInWithPopup(google);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleClose = () => {
    props.showSignUp();
    setEmailError("");
    setPasswordError("");
    setGeneralError("");
  };

  return (
    <>
      {/* Modal header */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header id="ModalTitle">
          <Modal.Title>Create Your Free Account!</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}

        <Modal.Body>
          <div className="container-fluid">
            {/* USERNAME */}

            <div className="row justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img
                  src={userGif}
                  className="userGif"
                  alt="username"
                  border="0"
                />
              </div>
              <span className=" col-10 col-sm-10 col-md-10 p-0 ">
                <input
                  type="text"
                  name="report"
                  placeholder="Username"
                  className="ModalBody"
                  ref={userRef}
                  onChange={() => props.settingName(userRef.current.value)}
                />
              </span>
            </div>
            <br />

            {/* EMAIL */}

            <div className="row justify-content-center" id="signIn">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={emailPic} alt="email" border="0" />
              </div>
              <div className=" col-10 col-sm-10 col-md-10 p-0">
                <input
                  type="text"
                  name="report"
                  placeholder="Email"
                  className="ModalBody"
                  ref={emailRef}
                  onChange={() => {
                    setEmailError("");
                    setGeneralError("");
                  }}
                />
              </div>
              <div className=" col-8 col-sm-8 col-md-8 p-0">
                {emailError ? <div className="error">{emailError} </div> : null}
              </div>
            </div>
            <br />

            {/* PASSWORD */}

            <div className="row justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={password} alt="password" border="0" />
              </div>
              <div className="col-10 col-sm-10 col-md-10 p-0 my-auto mx-auto ">
                <input
                  type="password"
                  name="report"
                  placeholder="Password"
                  className="ModalBody"
                  ref={passwordRef}
                  onChange={() => {
                    setPasswordError("");
                    setGeneralError("");
                  }}
                />
              </div>
              <div className=" col-8 col-sm-8 col-md-8 p-0">
                {passwordError ? (
                  <div className="error">{passwordError} </div>
                ) : null}
              </div>
            </div>
            <br />

            {/* CONFIRM PASSWORD */}

            <div className="row justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={password} alt="password" border="0" />
              </div>
              <div className="col-10 col-sm-10 col-md-10 p-0 my-auto mx-auto ">
                <input
                  type="password"
                  name="report"
                  placeholder="Confirm Password"
                  className="ModalBody"
                  ref={comfRef}
                />
              </div>
            </div>
            <br />

            {/* GENERAL ERROR MESSAGE */}

            <div>
              {generalError ? (
                <div className="error">{generalError} </div>
              ) : null}
            </div>
            <br />

            {/* SIGN UP */}

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 text-center">
                <Button
                  id="SignInButton"
                  onClick={(e) => {
                    signUp(e);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <br />

            {/* OR */}

            <div className="row">
              <div className="col-md-12 text-center">
                <p>OR:</p>
              </div>
            </div>

            {/* GMAIL AND FACEBOOK*/}

            <div className="row justify-content-center">
              <div className="col-4 col-sm-2 col-md-2 p-0 text-center">
                <a href="#" onClick={joinUsingGoogle}>
                  <img src={gmail} alt="email" border="0" />
                </a>
              </div>
              <div className="col-4 col-sm-2 col-md-2 p-0 text-center ">
                <a href="#">
                  <img src={facebook} alt="email" border="0" />
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer id="ModalFooter">
          <Container>
            <div className="row text-center">
              <a href="#" onClick={handleClose}>
                <p>No thanks, I will continue as a guest</p>
              </a>
            </div>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Sign_up;
