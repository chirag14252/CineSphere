
import "./Register.css"
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginPage from "./LoginPage/LoginPage";
import Ani from "./animation/Ani.jsx"
import { useState } from "react";
const Register = () => {
    
   const [TrackButtonForRegister,changeTrackRegister]= useState(0);
   const [TrackButtonForLogin,changeTrackLogin]= useState(0);
    return (
        <div className="register-parent">
            <div className="register-login-left">
                <Ani />
            </div>
            <div className="register-login-right">
                <ul className={`${(TrackButtonForLogin || TrackButtonForRegister)?'display-box':''}`}>
                    <li onClick={()=>{
                            changeTrackLogin(1);
                    }}><span>Login</span></li>
                    <li onClick={
                        ()=>{
                            changeTrackRegister(1);
                        }
                    }><span>Register</span></li>
                </ul>
                {
                    TrackButtonForLogin?<LoginPage/>:null
                }
                {
                    TrackButtonForRegister?<RegisterForm/>:null
                }
                  
            </div>
        </div>
    )
}

export default Register;