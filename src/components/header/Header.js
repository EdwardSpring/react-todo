import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({ title }) => {
  return (
    <header>
      <div className="header_main">
        <h3>to-do</h3>
      </div>

      <div className="header_date">
        <div className="date_left">
          <p className="day">today</p>
          <p className="date">17 Feb 2022</p>
          {/* <p>
            <a href="/about">About</a>
          </p> */}
        </div>

        <div className="date_right">
          <div className="img-div">
            <img
              src="https://img.icons8.com/fluency/48/000000/calendar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

let headingStyle = {
  color: "green",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
