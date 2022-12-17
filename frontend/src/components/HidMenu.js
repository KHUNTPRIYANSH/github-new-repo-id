import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import annex from "./Context/Context";

const HidMenu = () => {
  const backtouserlogin = () => {
    alert("login first");
  };

  const { listshow } = useContext(annex);

  return (
    <div className="hid-menu">
      <div className="close">
        <IconButton>
          <Link to="/">
            <CloseIcon className="close-btn" />
          </Link>
        </IconButton>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        {listshow && <NavLink to="/list">List</NavLink>}
        <NavLink to="/">About</NavLink>
        {/* <NavLink to="/" onClick={backtouserlogin}>
          Events
        </NavLink> */}
        <NavLink to="/">Contact</NavLink>
      </div>
      <div className="nav-btn">
        <Link to="/adminLogin">
          <div className="btn btn-adm">Admin</div>
        </Link>
        <Link to="/login">
          <div className="btn btn-art">Artist</div>
        </Link>
      </div>
    </div>
  );
};

export default HidMenu;
