import React from "react";
import WhoAreWe from "./WhoAreWe";
import TeamGrid from "./TeamGrid";
import ContactUs from "./ContactUs";
import ThankYouModal from "../Modals/ThankYouModal";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="mt-5">
      <WhoAreWe />
      <TeamGrid />
      <ContactUs />
      <ThankYouModal />
    </div>
  );
}

export default About;
