import "../css/header.css";

// header component that shows logo
const Header = () => {
  return (
    <div className="topnav" tabIndex={-1}>
      <a
        className="active"
        href="https://rvlife.com/"
        id="rvlife"
        tabIndex={-1}
      >
        RVLIFE
      </a>
      <a className="active" href="#home" id="planner" tabIndex={-1}>
        PLANNER
      </a>
    </div>
  );
};

export default Header;
