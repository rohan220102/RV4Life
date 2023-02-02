import React from "react";
import colors from "../colors.js";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../css/rating.css";

// takes in a rating and generates the ratings + stars display
const Rating = ({ rating }) => {
  return (
    <div className="rating-box">
      <div>{[...Array(5)].map((item, index) => createStar(rating, index))}</div>
      <p
        className="rating-value"
        style={{ fontWeight: "bold", color: colors.primary }}
      >
        {rating}
      </p>
    </div>
  );
};

export default Rating;

const createStar = (rating, index) => {
  const rounded = Math.floor(rating);
  var bigDecimal = require("js-big-decimal");
  const dec = bigDecimal.subtract(rating, index);

  if (dec < 0.3) {
    return <FaRegStar key={index} className="star" color={colors.stars} />;
  } else if (dec < 0.8) {
    return <FaStarHalfAlt key={index} className="star" color={colors.stars} />;
  } else {
    return <FaStar key={index} className="star" color={colors.stars} />;
  }
};
