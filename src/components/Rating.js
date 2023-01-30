import React from 'react'
import colors from '../colors.js'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import '../css/rating.css'

const Rating = ({rating}) => {
  return (
    <div className="rating-box">
      <p className="rating-value" style={
        {fontWeight: "bold", color: colors.primary}}>{rating}
      </p>

      <div>
        {[...Array(5)].map((item, index) => 
          createStar(rating, index))
        }
      </div>
    </div>
  );
}

export default Rating;

const createStar = (rating, index) => {
  const rounded = Math.floor(rating);
  var bigDecimal = require('js-big-decimal');
  const dec = bigDecimal.subtract(rating, index);
  
  if (dec < 0.3) {
    return <FaRegStar key={index} className="star" color={
      colors.primary}/>
  } else if (dec < 0.8) {
    console.log(rating, index, dec);
    return <FaStarHalfAlt key={index} className="star" color={
      colors.primary}/>
  } else {
    return <FaStar key={index} className="star" color={
      colors.primary}/>
  }
}