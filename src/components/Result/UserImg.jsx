import React from "react";
import userimg from "../../assets/pictures/userimg.png";
import "bootstrap/dist/css/bootstrap.min.css";

function UserImg() {
  return (
    <div>
      <img src={userimg} style={{ borderRadius: "50%" }} width="40%"></img>
    </div>
  );
}

export default UserImg;
