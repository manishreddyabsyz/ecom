import React from "react";
import "./SignUp.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
    const[formData,setFormData]=useState({email:"",name:"",password:"",confirmPassword:""})
    const navigate=useNavigate()
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const[errors,setErrors]=useState({})
   const validateForm=()=>{
    const newErrors={}
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if(!formData.name){
      newErrors.name="Name can't  be empty"
     
    }
     
     if(!formData.password){
      newErrors.password="Password can't be empty"
      }
    else if(formData.password.length<8){
      newErrors.password="Passoword length must be 8 or more"
     
    }
    if(formData.confirmPassword!==formData.password){
      newErrors.confirmpassword="Password and Confirmpassword must be same"
      
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
   
   }
    
    const submitHandler=(e)=>{
        e.preventDefault()
        if(validateForm()){
          localStorage.setItem("signupdata",JSON.stringify(formData))
        }
       }
  return (
    <main className="login-container">
      <div className="login-card">
      <h1 className="login-heading">LOGIN</h1>
      
        <form onSubmit={submitHandler}>
          <div>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="user-input"
            name="email"
            onChange={changeHandler}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
          <input
            type="text"
            placeholder="Enter Your name"
            className="user-input"
            name="name"
            onChange={changeHandler}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>

         
          <input
            type="password"
            placeholder="Enter Password"
            className="user-input"
            name="password"
            onChange={changeHandler}
          />
          {errors.password && <p className="error">{errors.password}</p>}
           </div>
           <div>

           
          <input
            type="text"
            placeholder="Confirm Password"
            className="user-input"
            name="confirmPassword"
            onChange={changeHandler}
          />
          {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
          </div>
          <input type="submit" value="Login" className="signUpBtn" />
        </form>
        </div>
    </main>
  );
};

export default SignUp;
