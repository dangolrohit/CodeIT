import React from "react";
import "./hero.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Button from "./Button";

function Hero() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <div>
      <div className="heroImg">
        <ImageSlider slides={SliderData} />
      </div>
      <div className="heroInfo">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e-o687mPkJw?si=gB37ogGmEFL0_mGE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="heroInfoContent">
          <h2>Learn to code and get certificates</h2>
          <p>
            At Code IT, we take prode in being a premier conputer institure
            committed to sharing the future of tech enthusiasts since our
            establishment on December 24, 2017. As a dedicated center for
            learning and development, we empower individuals with the skills and
            knowledge essential for success in the dynamic world of technology.
          </p>
          <h3>Our Mission :</h3>
          <p>
            At the core of Code IT's philosophy is the mission to provide
            comprehensive an...
          </p>
          <Button label="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
