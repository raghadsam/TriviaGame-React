import React from "react";
import { Container } from "react-bootstrap";
import TeamMembers from "./TeamMembers";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamMemberCard from "./TeamMemberCard";
import linkedin from "../../assets/pictures/linkedin.png";
import github from "../../assets/pictures/github.png";
/* eslint-disable react/prop-types */
function TeamGrid() {
  return (
    <>
      <Container className="mt-5">
        <div className="row justify-content-center">
          <div className="col-3 col-md-3">
            <div className="card">
              <div className="card-body">
                <img
                  src={TeamMembers[0].image}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "50%" }}
                ></img>
                <h5 className="card-title text-dark cardText">
                  {TeamMembers[0].name}
                </h5>
                <p className="card-text text-dark cardText">
                  {TeamMembers[0].title}
                </p>
                <a href={TeamMembers[0].linkedInLink}>
                  <img
                    src={linkedin}
                    width="10%"
                    height="10%"
                    style={{ borderRadius: "50%" }}
                  ></img>
                </a>
                {"            "}
                <a href={TeamMembers[0].githubLink}>
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
        <TeamMemberCard members={TeamMembers} />
      </Container>
    </>
  );
}

export default TeamGrid;
