import React, { useRef, useEffect } from "react";

import { NavLink } from "react-router-dom";
import "./header.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/images/logo.svg";
// import logoname from "../../assets/images/logo3.png";
import user_icon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";

const nav__links = [
  // Navigation
  {
    path: "home",
    display: "Home",
  },
  {
    path: "buy",
    display: "Buy",
  },
  {
    path: "sell",
    display: "Sell",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  // Add or remove class label "active__menu" on the element:
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* Includes all Navi items */}
            <div className="logo">
              <Link to="/home">
                <img className="logoicon" src={logo} alt="logo" />
                {/* <img className="logoname" src={logoname} alt="logoName" /> */}
                {/* <h1 className="logo_name">EzDealPal</h1> */}
              </Link>
            </div>
            {/* 
             1. menuRef is a reference to the DOM element <div>. Now we can access the following <div> element via menuRef.current 
             2. <div> element doesnt display if the width of page <= 700px, thus it can not be clicked. 
             3. After clicking on .mobile__menu element,  menuToggle() method will be called. Then "active__menu" will be added in the element's classList. The element will display as block element. Therefore, this <div> will become click-able*
             4. We can click the <div> elment (the whole page) now to call menuToggle(). This time the method will remove the "active__menu" from <div>'s classList
            */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="user__icon">
                <Link to="/userInfo">
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    src={user_icon}
                    alt="userIcon"
                  />
                </Link>
              </span>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
