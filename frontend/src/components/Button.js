import "../css/button.css";
import { FaPlusCircle } from "react-icons/fa";

const Button = ({ color, text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: "white",
        color: color,
        text: text,
        borderColor: color,
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = color;
        e.target.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = color;
      }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
