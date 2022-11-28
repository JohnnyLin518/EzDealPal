import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BuyerView from "../components/BuyerView";
import Home from "../components/Home";
import ItemDetails from "../components/ItemDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import SellerView from "../components/SellerView";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="buy" element={<BuyerView />} />
      <Route path="shop/:id" element={<ItemDetails />} />
      <Route path="sell" element={<SellerView />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
