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

    //进入"登陆页面时" (/login)时, 验证是否登陆, 若已登陆, 跳转至 /home 主页面, 若否, 则进入 /login页面
    const showLogin = () => {
        return isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Login handleLoggedIn={handleLoggedIn} />
        );
      };     

    //进入"查看商品具体信息"(/ItemDetails) 时, 验证是否已登陆, 若已登陆, 则进入 /ItemDetails 页面, 若否, 则跳转至 登陆页面(/Login)
    const showItemDetails =() => {
        return isLoggedIn ? <ItemDetails /> : <Redirect to = "/login" />;
    };
    
    //进入"卖方页面"(/SellerView) 时, 验证是否已登陆, 若已登陆, 则进入 /SellerView 页面, 若否, 则跳转至 登陆页面(/Login)
    const showSellerView = () => {
        return isLoggedIn ? <SellerView /> : <Redirect to = "/login" />;
    };

    //进入"编辑商品的信息的页面"(/PostItem) 时, 验证是否已登陆, 若已登陆, 则进入 /PostItem 页面, 若否, 则跳转至 登陆页面(/Login)
    const showPostItem =() => {
        return isLoggedIn ? <PostItem /> : <Redirect to = "/login" />;
    };
    
    //进入"编辑已发商品的信息的页面"(/EditItem) 时, 验证是否已登陆, 若已登陆, 则进入 /EditItem 页面, 若否, 则跳转至 登陆页面(/Login)
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
