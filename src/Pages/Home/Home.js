import React from "react";
import Banner from "./Banner/Banner";
import Connect from "./Connect/Connect";
import Feature from "./Feature/Feature";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Reviews from "./Testimonial/Reviews";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Feature></Feature>
      <MakeAppointment></MakeAppointment>
      <Reviews></Reviews>
      <Connect></Connect>
    </div>
  );
};

export default Home;
