import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from "./Components/navbar/Nav";
import Home from './Components/movie/Home';
import './App.css'



function App() {
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
    </>
  )
}

export default App
