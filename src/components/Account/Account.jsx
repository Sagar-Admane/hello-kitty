import React from 'react'
import style from "./account.module.scss"
import { FaCamera } from "react-icons/fa6"; 

function Account() {

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

  return (
    <div className={style.container} >
      <div className={style.container1}>
        <div className={style.head} >
            <h2>Account Setting</h2>
        </div>
        <div className={style.info} >
            <div>
                <img height={70} width={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwcRgFA-KFW6u0wScyvZEBWMLME5WkdeCUg&s" alt="" />
                <FaCamera className={style.cam} size={28} color='white' />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
        <div className={style.lorem} >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit voluptates ut repellendus ullam deleniti aperiam eveniet nisi eos quae sint modi est atque voluptate explicabo, animi nihil. Impedit, ipsa fugiat.</p>
        </div>
      </div>
    </div>
  )
}

export default Account
