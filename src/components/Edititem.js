import React from "react";
import {Button, Form, Input, message} from "antd";
import { Upload,Radio } from "antd";
import ImgCrop from "antd-img-crop";
import { EditProduct } from "../utils";

const EditItem = () => {
 const [fileList, setFileList] = React.useState([
  {
   uid: "-1",
   name: "image.png",
   status: "done",
   url: "https://img0.baidu.com/it/u=2107908400,1400895861&fm=253&fmt=auto&app=138&f=JPEG?w=609&h=442",
  },
 ]); // 上传图片list
 // 上传文件改变时的回调
 const onChange = ({ fileList: newFileList }) => {
  setFileList(newFileList);
 };
 // 点击文件链接或预览图标时的回调
 const onPreview = async (file) => {
  let src = file.url;
  if (!src) {
   src = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
   });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
 };

 // 表单提交
 const onFinish = (values) => {
  console.log("Success:", values);

  // 获取表单数据
  // 调用编辑
  EditProduct(values).then(
      message.success(`Successfully edit your product`)
  );
 };


 const GrouponChange = (e)=>{
  console.log(`radio checked:${e.target.value}`);
 }
 return (
     <div className="postItem">
      <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
      >
       <Form.Item
           label="Name"
           name="Name"
           rules={[{ required: true, message: "Please input your Name!" }]}
       >
        <Input />
       </Form.Item>

       <Form.Item
           label="Description"
           name="descriptor"
           rules={[{ required: true, message: "Please input your descriptor!" }]}
       >
        <Input />
       </Form.Item>

       <Form.Item
           label="Upload Picture"
           name="descriptor"
           rules={[{ required: true, message: "Please input your descriptor!" }]}
       >
        <ImgCrop rotate>
         <Upload
             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
             listType="picture-card"
             fileList={fileList}
             onChange={onChange}
             onPreview={onPreview}
         >
          {fileList.length < 5 && "+ Upload"}
         </Upload>
        </ImgCrop>
       </Form.Item>

       <Form.Item
           label="Connect Inf"
           name="Information"
           rules={[
            { required: true, message: "Please input your Information!" },
           ]}
       >
        <Input />
       </Form.Item>

       <Form.Item
           label="Product_status:"
           name="product_status"
           rules={[
            { required: true, message: "Please input your product_status!" },
           ]}
       >
        <Radio.Group onChange={GrouponChange} defaultValue="a">
         <Radio.Button value="a">on list</Radio.Button>
         <Radio.Button value="b">sold</Radio.Button>
         <Radio.Button value="c">pending</Radio.Button>

        </Radio.Group>
       </Form.Item>

       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
         Submit
        </Button>
       </Form.Item>
      </Form>
     </div>
 );
};

export default EditItem;


