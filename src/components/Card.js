import React, { Component } from "react";
import Button from "./Button.js";
import "../css/card.css";
import colors from "../colors.js";
import PropTypes from "prop-types";
import Rating from "./Rating.js";

const Card = ({
  title,
  rating,
  detour,
  visited,
  temp,
  id,
  selected = false,
  onSelect,
  onAdd,
}) => {
  return (
    <div
      className={isSelected(selected)}
      onClick={() => onSelect(id)}
      tabIndex={-1}
    >
      <header className="header">
        <div className="title">
          <h4>{title}</h4>
          <Rating rating={rating} />
        </div>
        <Button
          onClick={(e) => onAdd(e, id)}
          className="btn"
          color={colors.primary}
          text="Add"
        />
      </header>
      <span className="card-value">
        {detour} <span className="card-description">detour</span>
      </span>
      <span className="card-value">
        {visited} <span className="card-description">visited</span>
      </span>
      <span className="card-value">
        {temp} <span className="card-description">average temp.</span>
      </span>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  title: "Task Tracker",
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

const isSelected = (selected) => {
  var className = "card-container";
  if (selected) {
    className += " selected";
  }
  return className;
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }
