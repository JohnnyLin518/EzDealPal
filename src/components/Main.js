import React, { useState } from 'react';
import {Route, Switch, Redirect} from "react-router";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import BuyerView from "./BuyerView";
import ItemDetails from "./ItemDetails";
import SellerView from "./SellerView";
import PostItem from "./PostItem";
import EditItem from "./EditItem"

function Main(props){
    const { isLoggedIn, handleLoggedIn } = props;

    const showLogin = () => {
        return isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Login handleLoggedIn={handleLoggedIn} />
        );
      };     

    const showItemDetails =() => {
        return isLoggedIn ? <ItemDetails /> : <Redirect to = "/login" />;
    };
    
    const showSellerView = () => {
        return isLoggedIn ? <SellerView /> : <Redirect to = "/login" />;
    };

    const showPostItem =() => {
        return isLoggedIn ? <PostItem /> : <Redirect to = "/login" />;
    };

    const showEditItem =() => {
        return isLoggedIn ? <EditItem /> : <Redirect to = "/login" />;
    };

    return (
        <div className = "main">
            <Switch>
                <Route path = "/" exact component={ Home} />
                <Route path = "/home" component = { Home } />
                <Route path = "/login" render = { showLogin } />
                <Route path = "/register" component =  { Register } />
                <Route path = "/BuyerView" component = { BuyerView } />
                <Route path = "/ItemDetails" render = { showItemDetails } />
                <Route path = "/SellerView" render = { showSellerView } />
                <Route path = "/PostItem" render = { showPostItem } /> 
                <Route path = "/EditItem" render = { showEditItem } />
            </Switch>
        </div>
    );
}

export default Main;
