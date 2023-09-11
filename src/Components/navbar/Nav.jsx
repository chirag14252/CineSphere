import "./nav.css"
import logo from "./images/logo.svg";
import homesvg from "./images/home.svg"
import { useState } from "react";
import InstanceAxios from "../../axios";
const Nav = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="left-box">
                    <div className="nav-logo"><img src="https://img.icons8.com/ios-filled/50/documentary.png"></img></div>
                    <div className="nav-child">
                        <img src={homesvg} alt="" className="home-svg" />
                               <div className="heading">Home</div>
                    </div>
                </div>
                
                <div className="button-Schedule">Register</div>
             
            </div>



        </>

    )
}

export default Nav;