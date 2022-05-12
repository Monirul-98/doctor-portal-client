import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center text-secondary">{name}</h2>
        <p className="text-center">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-700">Try another date</span>
          )}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            className="btn btn-secondary text-white"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
