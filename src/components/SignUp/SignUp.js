import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ecomIMG from "../../images/ecom.jpg";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
const admin = process.env.REACT_APP_API_KEY;
const adminPassword=process.env.REACT_APP_PASSWORD

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const isUserLoggedIn = JSON.parse(localStorage.getItem("signupdata"));
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn !== null) {
      console.log("data");
      //  setAuth(isUserLoggedIn.name)
      return navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("main log");
  const validatePassword = (password) => {
    // Define regular expressions for password criteria
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);
    const isLongEnough = password.length >= 8;

    // Check if all criteria are met
    const isStrongPassword =
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar &&
      isLongEnough;
    return isStrongPassword;
  };

  const validateForm = () => {
    const newErrors = {};
    let result = validatePassword(formData.password);
    if (!formData.name) {
      newErrors.name = "Name can't  be empty";
    }
    if (!formData.password) {
      newErrors.password = "Password can't be empty";
    } else if (!result) {
      newErrors.password = "Password must be strong";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    console.log(e, "event");
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      localStorage.setItem("signupdata", JSON.stringify(formData));
      let token = JSON.parse(localStorage.getItem("signupdata"));
      console.log(formData, "formdata");
      setFormData({
        email: "",
        name: "",
        password: "",
        confirmpassword: "",
      });

      if (admin === token.name && adminPassword===token.password) {
        navigate("/admin");
      } else {
        
        navigate("/");
      }
    }
  };
  console.log(errors.namem,'name');
  return (
    <main className="login-container">
      <div className="login-image-container">
        <img src={ecomIMG} alt="login-img" className="login-image" />
      </div>
      <div className="login-card">
        <h1 className="welcome-heading">Welcome!</h1>
        <h1 className="ecom-heading">E-Commerce</h1>
        <h1 className="login-heading">USER LOGIN</h1>
        <form onSubmit={submitHandler} autoComplete="off">
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              
              id="outlined-required"
              label="Username"
              value={formData.name}
              helperText={errors.name}
              error={Boolean(errors.name)}
              name="name"
              onChange={changeHandler}
              className="user-input"
            />
            {/* {errors.name && <p className="error">{errors.name}</p>} */}
            <TextField
              
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              helperText={errors.password}
              error={Boolean(errors.password)}
              value={formData.password}
              onChange={changeHandler}
              className="user-input"
            />
            {/* {errors.password && <p className="error">{errors.password}</p>} */}
            <Button variant="contained" type="submit" className="login-btn">
              Login
            </Button>
          </Box>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
