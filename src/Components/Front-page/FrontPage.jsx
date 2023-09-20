import { useState } from 'react'
import Nav from "../navbar/Nav"
import Home from "../movie/Home"
import './FrontPage.css'
import Footer from '../Footer/Footer.jsx'
const FrontPage = ()=> {
  const [HeadingVar,changeHeading] = useState("Movies");
  const [trendingData,changeTrendingData] = useState([]);
  const changeTitle = (data)=>{
   changeHeading(data);
  }
  const changeData = (data)=>{
  changeTrendingData(data)
  }
  return (
    <>
    <Nav title = {changeTitle} show={changeData}/>
    <Home title = {HeadingVar}  show = {trendingData}/>
    <Footer/>
    </>
  )
}

export default FrontPage;
