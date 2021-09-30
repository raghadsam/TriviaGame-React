import React, { useState, useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import DefaultPic from "../../assets/user-profile.png";
import EditProfileModal from "../Modals/EditProfileModal";
import { auth } from "../../Firebase";

export default function EditProfile(props) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);

  function signOut() {
    return auth.signOut();
  }
  return (
    <div>
      <Button
        className="edit-profile-button"
        variant="text"
        style={{ color: "blue" }}
        onClick={() => setShow(true)}
      >
        <i>Edit Profile</i>
      </Button>
      <EditProfileModal
        show={show}
        onHide={() => setShow(false)}
        photo={props.photo}
        changeName={props.changeName}
      />
      {user ? (
        <div>
          {" "}
          <button onClick={signOut} className="btn btn-primary" id="signOut">
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
}
