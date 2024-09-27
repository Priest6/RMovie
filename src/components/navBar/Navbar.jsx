import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchLogo from "./SearchLogo.svg";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    //clean
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handlerHome = () => {
    navigate("/");
  };

  const handlerSearch = () => {
    navigate("/search");
  };

  //render
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h2 className="nav__logo" onClick={handlerHome}>
        Movie App
      </h2>
      <img
        className="nav__search"
        src={SearchLogo}
        alt="Search"
        onClick={handlerSearch}
      />
    </div>
  );
};

export default Navbar;
