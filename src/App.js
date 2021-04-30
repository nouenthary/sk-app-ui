import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter , Switch,
  Route
} from 'react-router-dom';
import About from './components/About';
import Dashboard from "./components/Dashboard";
import Login from "./auth/Login";
import useToken from "./utils/useToken";
import Customer from "./sale_online/customer/Customer";
import SaleLayout from "./sale_online/SaleLayout";

function App() {

  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/order" component={SaleLayout} />
        <Route path={`/customers`} component={Customer}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
