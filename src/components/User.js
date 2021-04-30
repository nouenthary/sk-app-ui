import React,{useState} from 'react';
import axios from 'axios';

const User = () => {

    const [state,setState] = useState({
        email: '',
        password: '',
        token: 'token'
    });
 
    const getEmail = (value) => {
        setState({...state,email: value});
    }

    const getPassword = (value) => {
        setState({...state,password: value});
    }

    const login = () => {
        console.log(state.email, state.password);
        axios.post('http://localhost:8000/api/login',{...state}).then(res => {
            console.log(res);
            if(res.status === 200){
                localStorage['token'] = res.data.success.token;
                setState({...state,token: res.data.success.token});
            }
        });
    }

    return(
        <div>
            <div style={{width: "100px"}}>
                {state.token}
            </div>
            <form>
                <input onChange={(value)=>getEmail(value.target.value)}/>
                <input onChange={(value)=>getPassword(value.target.value)}/>
                <button type='button' onClick={login}>Login</button>    
            </form>
        </div>
    );
}

export default User;