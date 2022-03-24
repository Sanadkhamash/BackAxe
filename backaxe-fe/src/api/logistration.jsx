import { SelectUnstyledContext } from '@mui/base';
import React from 'react';
import axios from 'axios';


export const getIfUserCanLogIn = async (data,setToken) => {
    console.log('dakhla;')
    JSON.stringify(data)
    axios.post('http://127.0.0.1:8000/api/token/',data)
    .then(res=> {
        setToken(res);
    }).catch(err=>{
        setToken("Username or Password Error");
        console.log(err)
    })

}


