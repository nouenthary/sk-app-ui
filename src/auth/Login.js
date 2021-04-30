import React from 'react';
import {Form, Input, Button, Card,message} from 'antd';
import './Login.css';
import {authLogin} from "../utils/config";
import PropTypes from 'prop-types';

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const Login = ({setToken })=> {

    const onFinish = (values) => {

       return authLogin(values).then(res=>{
            console.log(res)
            if(res == null){
                message.error('login error ...');
            }
            else if(res.status !== null && res.status === 200){
                setToken(res.data.success);
                window.location.reload();
            }
       });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className={`card-login`}>
            <Card style={{width: '400px'}}>

                <div style={{textAlign: 'center'}}>
                    <img src='logo192.png' style={{height: '60px'}} alt={`me`}/>
                    <h1>Admin Portal</h1>
                </div>

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
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input placeholder={`Username`}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder={`Password`}/>
            </Form.Item>


            <Form.Item >
                <Button block type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
            </Card>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;