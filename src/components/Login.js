import { Button, Form, Input, message, Layout } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../utils";
import Signup from "./Signup";

const { Content } = Layout;

class Login extends React.Component {
    state = {
        loading: false,
      };
    
    onFinish = (data) => {
        this.setState({
          loading: true,
        });
        login(data)
          .then(() => {
            message.success(`Login Successful`);
            this.props.onSuccess();
          })
          .catch((err) => {
            message.error(err.message);
          })
          .finally(() => {
            this.setState({
              loading: false,
            });
          });
      };

  render = () => {
    return (
    
    <Content className = "BGI"
    style={{
        padding: "200px",
        maxHeight: "calc(100%)",
        overflowY: "auto",
      }}>
      <Form
        name="normal_login"
        onFinish={this.onFinish}
        style={{
          width: 300,
          margin: "auto",
        }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" shape= "round" loading={this.state.loading}>
            Login
          </Button>
        </Form.Item>
        <Signup/>
      </Form>
    </Content>
    );
  };
}

export default Login;
