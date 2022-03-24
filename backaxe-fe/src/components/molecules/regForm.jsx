import React from 'react'
import {UnderLinedText} from '../atoms/inputs'
import { SuccessBtn } from '../atoms/buttons'
import axios from 'axios'

const handleReg=(e)=>{
    e.preventDefault()
    let data = {
        username:e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value
    }
    console.log('done');
    if (e.target.username.value&&e.target.email.value&&e.target.password.value&&e.target.r_password.value){
        let j = JSON.stringify(data)
        axios.post("http://127.0.0.1:8000/users/reg/",j,{
            headers:{
                Authorization: localStorage.getItem('access_token')? 
                'JWT ' + localStorage.getItem('access_token'):
                null,
                "Content-Type": "application/json",
                accept: "application/json"
            },
        })
        .then(res=>console.log(res))
    }
}
export const RegForm = () => {
  return (
    <form id='reg' onSubmit={(e)=>handleReg(e)}>
        <UnderLinedText name="username" label="User Name" />
        <UnderLinedText name="email" label="Email" />
        <UnderLinedText name="password" label="Password"/>
        <UnderLinedText name="r_password" label="Repeat Password" />
        <SuccessBtn type='submit' formName="reg">Submit</SuccessBtn>
    </form>
  )
}
