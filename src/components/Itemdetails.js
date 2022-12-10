import React, {useState, useMemo, useEffect} from "react";
import {Button, Carousel, Descriptions, Modal, Row} from "antd";
import "../styles/ItemDetails.css";
import {getItemDetails} from "../utils"
import { useLocation } from "react-router-dom";

const contentStyle = {
 height: "160px",
 color: "#fff",
 lineHeight: "160px",
 textAlign: "center",
 background: "#364d79",
};

const ItemDetails = () => {
 const location = useLocation();
 // var productName = "holder";
 const [productName, setProductName] = useState([]);
 const [description, setDescription] = useState([]);
 const [userEmail, setUserEmail] = useState([]);
 const [pic, setPic] = useState([]);
 const id = useMemo(async () => {
  // const path = location.pathname;
  // const arr = path.split("/");
  // return arr[2];
  // await myFunction();
 },[]);

 useEffect(() => {
  getItemDetails(13)
      .then(function (data) {
        const items = data;
        setProductName(items.productName)
        setDescription(items.productDescription)
        setUserEmail(items.userId)
        setPic(items.url)
        console.log(items)
        // console.log(items.productDescription)
      })
      .catch((err) => {
      })
      .finally(() => {
      });
 }, []);

 console.log("aaaa   " + productName);
 console.log("aaaaaaaa   " + userEmail);

 const [isModalOpen, setIsModalOpen] = useState(false);

 const showModal = () => {
  // const token = localStorage.getItem('token')

  setIsModalOpen(true);
 };
 const handleOk = () => {
  setIsModalOpen(false);
 };
 const handleCancel = () => {
  setIsModalOpen(false);
 };

 return (
     <div className="ItemDetails">
      <div className="ItemDetails-Carousel">
       <Carousel autoplay>
        <div>
             <img src={pic} alt="computer" width="500" height="300"/>
        </div>
        {/*<div>*/}
        {/*  <h3 style={contentStyle}>2</h3>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <h3 style={contentStyle}>3</h3>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <h3 style={contentStyle}>4</h3>*/}
        {/*</div>*/}
       </Carousel>
      </div>
      {/*<div>*/}
      {/*    {this.}*/}
      {/*</div>*/}
      <Row className="ItemDetails-Descriptions">
       <Descriptions title="Details" column={1}>
        <Descriptions.Item label="Name">{productName}</Descriptions.Item>
        <Descriptions.Item label="Description">{description}</Descriptions.Item>
       </Descriptions>
      </Row>
      <Row className="ItemDetails-Descriptions">
       <Button type="primary" onClick={showModal}>
        Connect seller
       </Button>
      </Row>

      <Modal
          title="Connect Seller"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
      >
       <Descriptions title="" column={1}>
        <Descriptions.Item label="Connect information">{userEmail}</Descriptions.Item>
       </Descriptions>
      </Modal>
     </div>
 );
};

export default ItemDetails;
