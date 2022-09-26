import React from "react";
import { BsGrid1X2Fill, BsCloudPlusFill } from "react-icons/bs";
import { RiAppsFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="three">
        <Link className="link" to="/dashbord">
          <RiAppsFill  style={{ color: "#fdcc00" }} />
        </Link>
        <Link className="link" to="/movieList">
          <BsGrid1X2Fill className="link" style={{ color: "#fdcc00" }} />
        </Link>
        <Link className="link" to="/addMovie">
          <BsCloudPlusFill className="link" style={{ color: "#fdcc00" }} />
        </Link>
        <Link className="link" to="/search">
          <BiSearchAlt className="link" style={{ color: "#fdcc00" }} />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
