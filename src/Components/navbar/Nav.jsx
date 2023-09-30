import "./nav.css"
import logo from "./images/logo.png"
import homesvg from "./images/home.svg"
import { useState } from "react";
import InstanceAxios from "../../axios";
import {useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    //navigate to popular page
    const navigateToPopular = ()=>{
       navigate("/Popular")
    }
    //home navigation
    const navigateHome = ()=>{
        navigate("/");
    }

    const navigateFavourite = ()=>{
        navigate("/favourite")
    }
    return (
        <>
            <div className="nav-bar">
                <div className="left-box">
                    <div className="nav-logo"><img src={logo}></img></div>
                    <div className="nav-child">
                        <img src={homesvg} alt="" className="home-svg" />
                               <div className="heading" onClick={navigateHome}>Home</div>
                               <div className="heading" onClick = {navigateToPopular}>Popular</div>
                    </div>
                </div>
                <div className="nav-right">
                <button className="button-nav-right glow-on-hover" onClick={navigateFavourite}>Your Favourites</button>
                <button className="button-nav-right glow-on-hover" >Log Out</button>
                </div>
            </div>



        </>

    )
}

export default Nav;