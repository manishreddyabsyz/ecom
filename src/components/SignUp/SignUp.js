import React from "react";
import "./SignUp.css"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const SignUp = () => {
    const[formData,setFormData]=useState({name:"",password:""})
    const isUserLoggedIn=JSON.parse(localStorage.getItem("signupdata"))

  const navigate=useNavigate()
  useEffect(()=>{
    console.log("data",isUserLoggedIn)
      if(isUserLoggedIn!==null){
       console.log("data")
       return navigate("/")
      }
  },[isUserLoggedIn,navigate])
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const validatePassword = (password) => {
      // Define regular expressions for password criteria
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
      const isLongEnough = password.length >= 8;
  
      // Check if all criteria are met
      const isStrongPassword = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough;
       return isStrongPassword
    }
    const[errors,setErrors]=useState({})
   const validateForm=()=>{
    const newErrors={}
    let result=validatePassword(formData.password)
    if(!formData.name){
      newErrors.name="Name can't  be empty"
     
    }
    if (!formData.password){
      newErrors.password="Password can't be empty"
    } 
     else if(!result){
      newErrors.password="Password must be strong"
      }
   
    
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
   
   }
    
    const submitHandler=(e)=>{
        e.preventDefault()
        if(validateForm()){
          localStorage.setItem("signupdata",JSON.stringify(formData))
          navigate("/")
          setFormData({
            email:"",
            name:"",
            password:"",
            confirmpassword:""
          })
        }
       
       
       }

       


  return (
    <main className="login-container">
      <div className="login-card">
      <h1 className="login-heading">LOGIN</h1>
      
        <form onSubmit={submitHandler}>
          
          <div>
          <input
            type="text"
            placeholder="User name"
            className="user-input"
            name="name"
            onChange={changeHandler}
            value={formData.name}
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
            value={formData.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
           </div>
           

           
          
          <input type="submit" value="Login" className="signUpBtn" />
        </form>
        </div>
    </main>
  );
};

export default SignUp;