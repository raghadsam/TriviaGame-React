import React from "react";
import DummyWriteData from "../../DummyWriteData";
import CategoryGrid from "./categoryGrid";
import CarouselMain from "./carousel";
import Rating from "../Modals/Rating";

function Home() {
  return (
    <>
      <CarouselMain />
      <br />
      <CategoryGrid />
      <br />
      <Rating />
    </>
  );
}

export default Home;
