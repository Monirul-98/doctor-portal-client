import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, reviewText, address } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl py-3">
      <div className="card-body">
        <p>{reviewText}</p>
      </div>
      <div className="flex items-center \">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mx-5 p-1">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h4 className="text-xl">{name}</h4>
          <h5>{address}</h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
