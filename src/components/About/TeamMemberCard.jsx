import React from "react";
// import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import linkedin from "../../assets/pictures/linkedin.png";
import github from "../../assets/pictures/github.png";

/* eslint-disable react/prop-types */
function TeamMemberCard(props) {
  return (
    <div className="row row-cols-1 row-cols-xl-3 g-4 justify-content-center">
      {props.members.map((member, index) => {
        if (member.title !== "Team Leader") {
          return (
            <div className="col-4 col-md-4">
              <div className="col-9 col-md-9 mx-auto">
                <div className="card mt-5" id={index}>
                  <div className="card-body">
                    <img
                      src={member.image}
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "50%" }}
                    ></img>
                    <h5 className="card-title text-dark cardText ">
                      {member.name}
                    </h5>
                    <p className="card-text text-dark cardText">
                      {member.title}
                    </p>
                    <a href={member.linkedInLink}>
                      <img
                        src={linkedin}
                        width="10%"
                        height="10%"
                        style={{ borderRadius: "50%" }}
                      ></img>
                    </a>
                    {"            "}
                    <a href={member.githubLink}>
                      <img
                        className="githubNoBorders"
                        src={github}
                        width="10%"
                        height="10%"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default TeamMemberCard;
