import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://imgs.search.brave.com/ermYoNLzcBnu3cGzr1YuLPNZHMtoPDtWWwyPlubMcj0/rs:fit:1024:373:1/g:ce/aHR0cHM6Ly9qaXRz/dmluZ2VyLmNvLnph/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA0L0FtYXpvbi1M/b2dvLTEwMjR4Mzcz/LnBuZw"
        alt="amazon"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">hello Aseel</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
           <ShoppingBasketIcon />
           <span className="header_optionLineTwo header_basketCount">
             0
           </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
