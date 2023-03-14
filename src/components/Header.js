import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://imgs.search.brave.com/4hDq0N_lv2yAPLOcwRgqiLi_bWTZgXLiXloeZASeq9A/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvQW1hem9uLUxv/Z28ucG5n"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>

      <div className="header_nav">
        <div className="header_option">
            <span className="header_optionLineOne">
                hello Aseel
            </span>
            <span className="header_optionLineOne">
                Sign In
            </span>
         
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">
               Returns
            </span>
            <span className="header_optionLineOne">
                Orders
            </span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">
                Your
            </span>
            <span className="header_optionLineOne">
                Prime
            </span>
        </div>
        <div className="header_option"></div>

      </div>
    </div>
  );
}

export default Header;
