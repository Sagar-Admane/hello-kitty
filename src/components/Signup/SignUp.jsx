import React, { useState } from "react";
import style from "./signup.module.scss";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleClick(e){
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    navigate("/account")
  }

  return (
    <div className={style.container}>
      <div className={style.container1}>
        <form>
          <div className={style.form}>
            <h1>Create your PopX Account</h1>
            <div className={style.inp}>
              <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
              <label>Full Name *</label>
            </div>
            <div className={style.inp}>
              <input type="text" placeholder="Enter Your Phone Number" />
              <label>Phone Number *</label>
            </div>
            <div className={style.inp}>
              <input type="text" placeholder="Enter Your Email Address" onChange={(e) => setEmail(e.target.value)} />
              <label>Email Address *</label>
            </div>
            <div className={style.inp}>
              <input type="text" placeholder="Enter Your Password" />
              <label>Password *</label>
            </div>
            <div className={style.inp}>
              <input type="text" placeholder="Enter Your Company Name" />
              <label>Company Name *</label>
            </div>
            <div className={style.rdio}>
              <label>Are you an agency?</label>
              <div>
              <input type="radio" name="agency" id="" /> <span>Yes</span>
              <input type="radio" name="agency" id="" /> <span>No</span>
              </div>
            </div>
          </div>
          <div className={style.button}>
            <button onClick={handleClick} >Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
