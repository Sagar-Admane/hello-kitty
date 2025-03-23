import React from 'react'
import style from "./homepage.module.scss"
import img1 from "../../images/20.svg";
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();
        navigate("/login");
    }

  return (
    <div className={style.container} >
        <div className={style.container1} >
            <div className={style.img} >
                <img src={img1} alt="" />
            </div>
            <div className={style.button}>
                <h1>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button onClick={()=>navigate("/signup")} style={{backgroundColor : "#6C25FF"}} >Create Account?</button>
                <button onClick={()=>navigate("/login")} style={{backgroundColor : "#CEBAFB", color : "black"}} >Already Registered? Login</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage
