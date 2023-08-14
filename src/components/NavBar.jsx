import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Navbar = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((current) => !current);
  };

  return (
    <header>
      <button onClick={handleShow} className="toggle">
        <MenuIcon />
      </button>
      <div className="logo">CHANEL</div>
      {show && (
        <div className="display-menu">
          <Link className="menu" to={"/"}>
            CHANEL
          </Link>
          <Link className="menu" to={"/CocoBeach"}>
            COCO BEACH
          </Link>
          <Link className="menu" to={"/HauteCouture"}>
            HAUTE COUTURE
          </Link>
          <Link className="menu" to={"/HauteCouture"}>
            FASHION
          </Link>
          <Link className="menu" to={"/"}>
            HIGH JEWERLY
          </Link>
          <Link className="menu" to={"/"}>
            FINE JEWERLY
          </Link>
          <Link className="menu" to={"/"}>
            WATCHES
          </Link>
          <Link className="menu" style={{ marginLeft: "auto" }} to={"/"}>
            ABOUT CHANEL
          </Link>
          <div className="hompage-items">
            <SearchTwoToneIcon />
            <PersonOutlineOutlinedIcon />
            <StarBorderOutlinedIcon />
            <ShoppingBagOutlinedIcon />
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
