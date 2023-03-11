import React, { useState } from 'react';

import CSS from "./login.css";



const Login = () => {
    const[user, setUser]= useState({name:"", email:"", password:""});
    const{name, email, password}=user;

const handleChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value});
    // const fileName=e.target.name;
    // if(fileName==='name'){
    //     setUser({name:e.target.value, email,password});
    // };
    // if(fileName==='email'){
    //     setUser({name, email:e.target.value,password});
    // };
    // if(fileName==='password'){
    //     setUser({name, email,password:e.target.value});
    // };   
};
const handleSubmit=(e)=>{
    let userInformation={
        name,
        email,
        password
    }
     e.preventDefault();
    console.log(user);

};

    return (
        <div className='login'>
            
                <h1>Registration</h1>
                <form action="" onSubmit={handleSubmit}>
                        <div className='form'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name"value={name} onChange={handleChange} required/>
                        </div>
                        <div className='form'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" value={email} onChange={handleChange} required />
                        </div>
                        <div className='form'>
                            <label htmlFor="">Password:</label>
                            <input type="password" name="password" id="password" value={password} onChange={handleChange} required />
                        </div>
                        <div className='form'>
                            <button type="submit" id="btn">Register</button>
                        </div>
                </form>


            </div>
    );
};

export default Login;