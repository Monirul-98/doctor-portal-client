import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Connect = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="p-7">
      <h3 className="text-xl text-primary text-center">Contact us</h3>
      <h2 className="text-4xl text-white text-center mb-9~">
        Stay connected with us
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Connect;
