import React from "react";

function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          style={{
            fontSize: "1.5em", 
            color: index < filledStars ? "gold" : "lightgray", 
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
