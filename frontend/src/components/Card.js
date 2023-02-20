// libraries
import { useState } from "react";

// components
import Button from "./Button";
import Rating from "./Rating";

// styles
import "../css/card.css";
import colors from "../colors";

const Card = ({
  title,
  rating,
  detour,
  visited,
  temp,
  id,
  selected,
  onSelect,
  onBtnClick,
  btnText,
}) => {
  const [showAddBtn, setShowAddBtn] = useState(false);

  return (
    <div
      id={"card" + id}
      className={isSelected(selected)}
      onClick={() => onSelect(id)}
      onMouseEnter={() => setShowAddBtn(true)}
      onMouseLeave={() => setShowAddBtn(false)}
      tabIndex={-1}
    >
      <header className="header">
        <div className="title">
          <h4>{title}</h4>
          <Rating rating={rating} />
        </div>
        <Button
          onClick={(e) => onBtnClick(e, id)}
          className="btn"
          color={colors.primary}
          text={btnText}
          style={{ visibility: showAddBtn ? "visible" : "hidden" }}
        />
      </header>
      <span className="card-value">
        {detour} <span className="card-description sp">detour</span>
      </span>
      <span className="card-value">
        {visited} <span className="card-description sp">visited</span>
      </span>
      <span className="card-value">
        {temp} <span className="card-description">average temp.</span>
      </span>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  title: "Location Name",
  rating: 5,
  detour: "0 min.",
  visited: "0",
  temp: "0",
  selected: false,
};

const isSelected = (selected) => {
  var className = "card-container";
  if (selected) {
    className += " selected";
  }
  return className;
};
