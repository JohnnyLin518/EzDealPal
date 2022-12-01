import React from 'react';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    message,
    Modal
} from 'antd';
import { signup } from "../utils";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const { Option } = Select;

class Signup extends React.Component {
    state = {
        displayModal: false,
    };

    signupOnClick = () => {
        this.setState({
            displayModal: true,
        });
    };

    onFinish = (data) => {
        signup(data)
            .then(() => {
                this.setState({
                    displayModal: false,
                });
                message.success(`Successfully signed up`);
            })
            .catch((err) => {
                message.error(err.message);
            });
    };

    handleCancel = () => {
        this.setState({
            displayModal: false,
        });
    };


    render = () => {
        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select
                    style={{
                        width: 70,
                    }}
                >
                    <Option value="86">+86</Option>
                    <Option value="01">+1</Option>
                </Select>
            </Form.Item>
        );
        return (
            <>
                <Button shape="round" type="primary" onClick={this.signupOnClick}>
                    Register
                </Button>
                <Modal
                    title="Register"
                    visible={this.state.displayModal}
                    onCancel={this.handleCancel}
                    footer={null}
                    destroyOnClose={true}
                >
                    <Form
                        name="normal_register"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                        preserve={false}
                    >
                        <Form.Item
                            name="email"
                            label = "email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: "Please input your email!"
                                }]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="password"/>
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="comfirm password"/>
                        </Form.Item>

                        <Form.Item
                            name="name"
                            label = "name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!"},
                            ]}
                        >
                            <Input placeholder="name"/>
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                                placeholder="phone number"
                            />
                        </Form.Item>

                        <Form.Item
                            name="zip_code"
                            label="zip"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the zip code!',
                                },
                            ]}
                        >
                            <Input placeholder="Zipcode"/>
                        </Form.Item>

                        <Form.Item
                            name="address"
                            label="Address"
                            rules={[
                                {
                                    message: 'Please input address!',
                                },
                            ]}
                        >
                            <Input placeholder="Address"/>
                        </Form.Item>


                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>


        );
    };
}



export default Signup;