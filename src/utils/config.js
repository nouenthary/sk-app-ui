import axios from "axios";

const BASE_URL = `http://127.0.0.1:8000/api`;

export const getToken = () => {
    const token = localStorage.getItem('token');
    if (token == null){
        return false;
    }
    const stringToken = JSON.parse(token);
    return stringToken.token;
}

export const headers = () => {
    return {
        'Authorization': 'Bearer ' + getToken(),
        'Content-Type':'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    };
}

//console.log(headers);

export const authLogin =  async (data) =>{
    return await axios.post(BASE_URL + '/login' , {...data})
    .then(response => {
        return response;
    }).catch(error=>{
        console.log(`error :` ,error);
    });
}


export const fetchData = async (url, data) => {
    return await axios.post(BASE_URL + url, {...data},{headers})
        .then(response => {
            return response.data;
        }).catch(error=>{
            console.log(`error :` ,error);
        });
}

export const fetchPost = (url, data) => {
    return axios.post(BASE_URL + url, JSON.stringify(data),{headers})
        .then(response => {
            return response.data;
        }).catch(error=>{
            console.log(`error :` ,error);
        });
}





