import React from "react";
import { Container, Image } from "react-bootstrap";
import userimg from "../../assets/pictures/userimg.png";

function UserInfo(props) {
  return (
    <Container>
      <div className="m-2">
        <Image
          src={props.photo ? props.photo : userimg}
          width="193"
          roundedCircle
        />
        <h1>{props.name}</h1>
      </div>
    </Container>
  );
}

export default UserInfo;
