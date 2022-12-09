import React from "react";
import { Space, Table, Tag, Input, Row } from "antd";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const { Search } = Input;
const BuyerView = () => {
 const navigate = Redirect();
 const onSearch = (value) => console.log(value);
 const columns = [
  {
   title: "Name",
   dataIndex: "name",
   key: "name",
   render: (text) => <a>{text}</a>,
  },
  {
   title: "Age",
   dataIndex: "age",
   key: "age",
  },
  {
   title: "Address",
   dataIndex: "address",
   key: "address",
  },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
   title: "Action",
   key: "action",
   render: (row, record) => (
       <Space size="middle">
        <span onClick={() => navigate("/postItem/")}>Upload</span>
        <span onClick={() => navigate("/editItem/" + row.id)}>Edit</span>
        <span onClick={() => navigate("/shop/" + row.id)}>Details</span>
       </Space>
   ),
  },
 ];
 const data = [
  {
   id: "1",
   name: "John Brown",
   age: 32,
   address: "New York No. 1 Lake Park",
   tags: ["nice", "developer"],
  },
  {
   id: "2",
   name: "Jim Green",
   age: 42,
   address: "London No. 1 Lake Park",
   tags: ["loser"],
  },
  {
   id: "3",
   name: "Joe Black",
   age: 32,
   address: "Sidney No. 1 Lake Park",
   tags: ["cool", "teacher"],
  },
 ];
 return (
     <>
      <Row style={{ marginTop: 20 }} justify="center">
       <div>
        <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        />
       </div>
      </Row>
      <Row style={{ marginTop: 20 }} />
      <Table columns={columns} dataSource={data} />

      {/*<h1>Here is Buy View!</h1>*/}
      {/*<button type="button" onClick={() => navigate("/shop/:id")}>*/}
      {/*  Check details*/}
      {/*</button>*/}
     </>
 );
};

export default BuyerView;
