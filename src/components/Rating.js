import React from 'react'
import colors from '../colors.js'
import { FaStar } from "react-icons/fa";
import '../css/rating.css'

const Rating = ({givenRating}) => {
  const rating = Math.floor(givenRating);

  return (
    <div className="rating-box">
      <p className="rating-value" style={
        {fontWeight: "bold", color: colors.primary}}>{givenRating}
      </p>

      <div>
        {[...Array(5)].map((item, index) => (
          <FaStar key={index} className="star" color={
            index + 1 < rating || index + 1 === rating ? 
            colors.primary : "rgb(192,192,192)"}/>
        ))}
      </div>
    </div>
  );
}

export default Rating