import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Feature = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl mr-24"
        ></img>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-accent">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 font-bold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Explore more</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Feature;
