import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Sign_up from "../Modals/Sign_up";
import Sign_in from "../Modals/Sign_in";
import { auth } from "../../Firebase";
import { HashLink } from "react-router-hash-link";
import icon from "./icon.png";
import userimg from "../../assets/pictures/userimg.png";

/* eslint-disable no-debugger, no-console */

export default function NavBar() {
  const [user, setUser] = useState(null);
  const [signUp, setSingUp] = useState(false);
  const [name, setName] = useState("");

  function settingName(name) {
    setName(name);
  }

  function showSignUp() {
    setSingUp((prev) => !prev);
  }

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const user = {
          uid: userAuth.uid,
          username: name,
          email: userAuth.email,
          photo: userAuth.photoURL,
        };
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [name]);

  return (
    <div id="navbar">
      <Navbar id="Navbar" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="a">
              <img src={icon} className="logo" />
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link id="Play">
              <HashLink to="/#categories" style={{ all: "unset" }}>
                Play
              </HashLink>
            </Nav.Link>
            <Nav.Link id="Create">
              <Link to="/create" style={{ all: "unset" }}>
                Create
              </Link>
            </Nav.Link>
            <Nav.Link id="About">
              <Link to="/about" style={{ all: "unset" }}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link id="Username">
              {user ? (
                <div id="user-container">
                  <Link
                    to={{ pathname: "/profile/" + user.uid, state: user }}
                    id="user-name"
                    style={{ all: "unset" }}
                  >
                    <img
                      src={auth.currentUser.photoURL || userimg}
                      id="user-pic"
                    />
                    &nbsp;&nbsp;
                    <span> {auth.currentUser.displayName || name}</span>
                  </Link>
                </div>
              ) : (
                <Sign_in showSignUp={showSignUp} />
              )}
              <Sign_up
                showSignUp={showSignUp}
                show={signUp}
                settingName={settingName}
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
