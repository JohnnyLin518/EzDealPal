import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PrivateLink = ({ to, children }) => {
  const navigate = useNavigate();
  const isLoggedIn = false;
  const handleClick = (event) => {
    if (isLoggedIn) {
      navigate(to);
    } else {
      event.preventDefault();
      const result = window.confirm(
        "You need to login first. Do you want to go to the login page?"
      );
      if (result) {
        navigate("/login");
      } else {
        return;
      }
    }
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default PrivateLink;
