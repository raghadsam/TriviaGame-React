import React from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";
import carimg1 from "../../assets/pictures/carouselImg1.jpg";
import carimg2 from "../../assets/pictures/carouselImg2.gif";
import carimg3 from "../../assets/pictures/carouselImg3.png";

function CarouselMain() {
  return (
    /*
    <div className="carouselDiv mx-auto mt-4">
      <Carousel
        className=" mx-auto carouselSize"
        controls={false}
        fade={true}
        pause={false}
      >
        <Carousel.Item interval={5000}>
          <img className="carouselImg" src={carimg1} />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="carouselImg" src={carimg2} />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="carouselImg" src={carimg3} />
        </Carousel.Item>
      </Carousel>
    </div>
    */
    <div className="carouselDiv mx-auto mt-4">
      <Carousel
        className=" mx-auto carouselSize"
        controls={false}
        fade={true}
        pause={false}
      >
        <Carousel.Item interval={5000}>
          <img className="d-block w-100 carouselImg" src={carimg1} />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100 carouselImg" src={carimg2} />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100 carouselImg" src={carimg3} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselMain;
