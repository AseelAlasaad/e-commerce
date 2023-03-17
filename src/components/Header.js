import React from "react";
import './Header.css';
function Header()
{
return (
    <>
 

    <div className="header">
      <img
        className="header_logo"
        src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
        alt="amazon"
      />

      {/* <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div> */}

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Home</span>
       
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Shop</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Blog</span>
         
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Contact</span>
        </div>
        <div className="header_optionBasket">
      
           {/* <span className="header_optionLineTwo header_basketCount">
             0
           </span> */}
        </div>
      </div>
    </div>
    </>
);
}
export default Header;