import React from "react";
import { Link, useHistory } from "react-router-dom";

const PrivateLink = ({ to, children }) => {
  const history = useHistory();

  const handleClick = (event) => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      history.push(to);
    } else {
      event.preventDefault();
      const result = window.confirm(
        "You need to login first. Do you want to go to the login page?"
      );
      if (result) {
        history.push("/login");
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
