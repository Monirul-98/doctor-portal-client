import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Tom Hanks",
      reviewText:
        "Their goal was my best care. I feel like Best Doctors helped save my life.",
      img: people1,
      address: "California",
    },
    {
      _id: 2,
      name: "Anna Hathway",
      reviewText:
        "I have a lot more confidence going forward that I have the right doctors and the right treatment plan.",
      img: people2,
      address: "Manchester",
    },
    {
      _id: 3,
      name: "Alice Eve",
      reviewText:
        "If I hadn't gone to Best Doctors, I could still be waiting for a diagnosis right now.... Now I know what's going on and I have a name for it. Best Doctors really saved me.",
      img: people3,
      address: "London",
    },
  ];
  return (
    <section className="my-24">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary text-xl">Testimonial</h3>
          <h2 className="text-3xl text-accent">What our patient says</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
