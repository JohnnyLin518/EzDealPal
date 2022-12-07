import { Route, Routes, Navigate } from "react-router-dom";

import SellerView from "../components/SellerView";
import Register from "../components/Register";
import Login from "../components/Login";
import ItemDetails from "../components/ItemDetails";
import PostItem from "../components/PostItem";
import EditItem from "../components/EditItem";
import BuyerView from "../components/BuyerView";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="buyerView" />} />
      <Route path="buyerView" element={<BuyerView />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="postItem" element={<PostItem />} />
      <Route path="editItem" element={<EditItem />} />
      <Route path="sellerView" element={<SellerView />} />
      <Route path="buyerView/:id" element={<ItemDetails />} />
    </Routes>
  );
};

export default Routers;
