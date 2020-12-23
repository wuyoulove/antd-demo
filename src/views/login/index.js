import React, { Component } from 'react';
import './style/index.less'
import { Form, Input, Button, Checkbox } from 'antd';

class Login extends Component {
    state = {
        ruleForm: {
            name:'' 
        },
        rules:[]
    };
    render() {
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 8,
              span: 16,
            },
          };
          const onFinish = (values) => {
            console.log('Success:', values);
            this.props.history.push("/childMoudle");
          };
        
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
        return (
            <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        );
    }
}

export default Login;