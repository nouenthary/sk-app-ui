import React, {useEffect, useState} from 'react';
import {Table, Button, Input, Form, Card} from 'antd';
import {fetchData, fetchPost} from "../../utils/config";
import {PlusOutlined,DownloadOutlined} from '@ant-design/icons';

const Customer = () =>{

    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
            title: 'Name'
        },
        {
            dataIndex: 'phone',
            key: 'phone',
            title: 'Phone'
        },
        {
            dataIndex: 'address',
            key: 'address',
            title: 'Address'
        },
        {
            dataIndex: 'note',
            key: 'note',
            title: 'Note'
        }
    ];

    const [state, setState] =useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        fetchCustomer();
    },[]);

    const fetchCustomer = () => {
        fetchData('/customers',{}).then(response=>{
            setState({data: response, loading: false});
        }).catch(error=>{
            console.log(error);
        })
    }

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
    };


    const onFinish = (values) => {
        return fetchPost('/customers/create',values)
        .then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div style={{marginBottom: 5}}>
                <Button><PlusOutlined /> Add New</Button>
                <span style={{paddingRight: 5}}/>
                <Button type={`primary`}><DownloadOutlined /> Export</Button>
                <span style={{paddingRight: 5}}/>
                <Input style={{width: 200}} placeholder={`Search Customer...`}/>
            </div>
            
            <div>
                <Card style={{width: '400px'}}>

                    <div style={{textAlign: 'center'}}>
                        <img src='logo192.png' style={{height: '60px'}} alt={`me`}/>
                        <h1>Admin Portal</h1>
                    </div>

                    <Form

                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your customer!',
                                },
                            ]}
                        >
                            <Input placeholder={`Customer`}/>
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                        >
                            <Input placeholder={`Phone`}/>
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}
                        >
                            <Input placeholder={`Address`}/>
                        </Form.Item>


                        <Form.Item
                            name="note"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your note!',
                                },
                            ]}
                        >
                            <Input.TextArea placeholder={`Note`}/>
                        </Form.Item>


                        <Form.Item >
                            <Button block type="primary" htmlType="submit">
                                Add New
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

            <Table
                bordered
                rowSelection={{onChange: onSelectChange,}}
                loading={state.loading}
                size={`small`}
                columns={columns}
                rowKey={`id`}
                pagination={{size: 'middle', pageSize: 20}}
                dataSource={state.data}/>

        </>
    )
}

export default Customer;