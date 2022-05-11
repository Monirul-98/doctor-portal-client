import React from "react";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="flex items-center my-24"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="flex-1">
        <img className="mt-[-140px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-primary font-bold text-xl uppercase py-6">
          Appointment
        </h3>
        <h2 className="text-white text-3xl pb-6">Make an appointment Today</h2>
        <p className="text-white pb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
