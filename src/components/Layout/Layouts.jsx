import React from "react";
import Routers from "../../routers/Router";
import Logo from "../../assets/images/logo.svg";
import { Layout } from "antd";
const Layouts = () => {
  const { Header } = Layout;
  return (
    <>
      <Header style={{ backgroundColor: "lightblue" }}>
        <div className="header">
          <img src={Logo} className="App-logo" alt="logo" height="64px" />
        </div>
      </Header>
      <div>
        <Routers />
      </div>
    </>
  );
};

export default Layouts;
