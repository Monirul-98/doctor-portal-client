import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="Dentist chair"
          className=" rounded-lg shadow-2xl lg:w-3/6"
        />
        <div className="mr-9">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
