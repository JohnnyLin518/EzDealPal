import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Log_in from "./Login";
import Sign_up from "./Signup";
import Buyer_view from "./Buyerview";
import Item_details from "./Itemdetails";
import Seller_view from "./Sellerview";
import Edit_item from "./Edititem";
import Add_item from "./Additem";

function Main(props) {
  const { isLoggedIn, handleLoggedIn } = props;
  //测试
  //   const [isLoggedIn, handleLoggedIn] = useState(true);

  const showLogin = () => {
    return isLoggedIn ? (
      <Redirect to="/search" />
    ) : (
      <Log_in handleLoggedIn={handleLoggedIn} />
    );
  };

  const showItemdetails = () => {
    return isLoggedIn ? <Item_details /> : <Redirect to="/login" />;
  };

  const showSellerview = () => {
    return isLoggedIn ? <Seller_view /> : <Redirect to="/login" />;
  };

  const showEdititem = () => {
    return isLoggedIn ? <Edit_item /> : <Redirect to="/login" />;
  };

  const showAdditem = () => {
    return isLoggedIn ? <Add_item /> : <Redirect to="/login" />;
  };

  const showSignup = () => {
    return isLoggedIn ? <Buyer_view /> : <Redirect to="/signup" />;
  };

  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Buyer_view} />
        <Route path="/search" component={Buyer_view} />
        <Route path="/login" render={showLogin} />
        <Route path="/signup" render={showSignup} />
        <Route path="/itemdetails/:productId" render={showItemdetails} />
        <Route path="/sell" render={showSellerview} />
        <Route path="/edititem" render={showEdititem} />
        <Route path="/additem" render={showAdditem} />
      </Switch>
    </div>
  );
}

export default Main;
