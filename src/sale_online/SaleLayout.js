import { Layout, Menu } from 'antd';
import './style.css';
import {AppstoreOutlined} from '@ant-design/icons';
import {Link, Route, Switch} from 'react-router-dom';

import Customer from "./customer/Customer";

const { Header, Content } = Layout;


const SaleLayout = () =>{
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to={`/`}>
                            <AppstoreOutlined />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={`/customer-new`}>
                         Customer
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">Order</Menu.Item>

                </Menu>
            </Header>
            <Content className="site-layout">
                <div className="site-layout-background" style={{ padding: "70px 5px", height: '100vh' }}>
                    <Customer/>
                    <Switch>
                        <Route exact path={`/`}/>
                        <Route exact path={`/customer-new`} component={Customer}/>
                    </Switch>
                </div>
            </Content>
        </Layout>
    )
}

export default SaleLayout;