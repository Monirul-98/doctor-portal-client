import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="w-3/6" src={chair}></img>
        <div className="bg-banner bg-contain bg-center bg-no-repeat">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
