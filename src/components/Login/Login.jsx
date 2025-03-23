import React, { useState } from "react";
import style from "./login.module.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [name, setName] = useState("");

  const navigate = useNavigate();

  function handleClick(e){
    e.preventDefault();
    localStorage.setItem("email", formData.email);
    localStorage.setItem("name", name);
    navigate("/account");
  }

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Check if both fields have data
  const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

  return (
    <div className={style.container}>
      <div className={style.container1}>
        <form>
          <div className={style.form}>
            <h1>Signin To Your PopX Account</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className={style.inp}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Full Name *</label>
            </div>
            <div className={style.inp}>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email Address *</label>
            </div>
            <div className={style.inp}>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
              />
              <label>Password *</label>
            </div>
          </div>
          <div className={style.button}>
            <button 
              type="submit" 
              disabled={!isFormValid} 
              className={!isFormValid ? style.disabledButton : ""}
              onClick={handleClick}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
