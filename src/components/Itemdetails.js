import React, {useState} from "react";
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
 let productName = "holder";
 // const id = useMemo(() => {
 const path = location.pathname;
 const arr = path.split("/");
 //     return arr[2];
 // },[]);
 let list = getItemDetails(8).then(function (data) {
  const items = data;
  console.log(items.productName)
  console.log(items.productDescription)
  return [items.productName, items.productDescription];
 });
 console.log("aa  " + list.then(function (data){
  console.log(data[0])
 }))
 productName = list[0]




 const [isModalOpen, setIsModalOpen] = useState(false);

 const showModal = () => {
  const token = localStorage.getItem('token')

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
         <h3 style={contentStyle}>1</h3>
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
        <Descriptions.Item id="name" label="Name">{productName}</Descriptions.Item>
        <Descriptions.Item label="Description">Great!</Descriptions.Item>
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
       <Descriptions title="Details" column={1}>
        <Descriptions.Item label="Connect information">10086</Descriptions.Item>
        <Descriptions.Item label="Address">CA</Descriptions.Item>
       </Descriptions>
      </Modal>
     </div>
 );
};

export default ItemDetails;
