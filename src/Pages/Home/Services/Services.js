import React from "react";
import ServiceCard from "./ServiceCard";
import teeth1 from "../../../assets/images/fluoride.png";
import teeth2 from "../../../assets/images/cavity.png";
import teeth3 from "../../../assets/images/whitening.png";
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: teeth1,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: teeth2,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: teeth3,
    },
  ];
  return (
    <div className="my-28">
      <h3 className="text-secondary text-center text-3xl font-bold uppercase">
        Our Services
      </h3>
      <h3 className="text-accent text-center text-5xl mb-4">
        Service we provide
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
