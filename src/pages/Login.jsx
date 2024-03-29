import React from 'react';
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Login',{email,password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/Home') 
            }
       
    })
    .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-light vh-100 ">
            <div className="bg-white p-3 rounded w-25 shadow p-3 mb-5 bg-body rounded">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" name="email" placeholder="Enter Email" className="form-control rounded-0" autoComplete="off"
                     onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" name="password" placeholder="Enter Password" className="form-control rounded-0" autoComplete="off"
                     onChange={(e) => setPassword(e.target.value)}/>
                </div> 
                <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
            </form>
           
        </div>
        </div>
       
    );
}
export default Login;
