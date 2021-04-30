import React,{useState,useEffect} from 'react';
import {fetchData} from "../utils/config";

const Order = () => {
    const [state,setState] = useState({
        data: []
    });

    useEffect(()=>{
        fetchData('/customers',{data: 's'}).then((response)=>{
            console.log(response)
            setState({data: response});
        })
    },[]);

    return (
        <div>
            Order
            {JSON.stringify(state.data)}
        </div>
    );
}

export default Order;