import { useEffect, useState } from "react";
import InstanceAxios from "../../axios";
import Card from "../cards/Card";;
import Carasol from "./carasoul/Carasol";
import "./Home.css"
import Footer from "../Footer/Footer";
const Home = (props)=>{
  //fetching data of trending movies
  const [trendingMoviesVar,changeTrendingMovies] = useState([]);
  const trendingMovies = ()=>{
   InstanceAxios().get("https://api.themoviedb.org/3/trending/movie/day?language=en-US").then(
      (res)=>{
     changeTrendingMovies(res.data.results);
      }
   )
  }
  //fetching data of trending tv shows
  const [trendingTVshowsVar, changeTrendingTvshows] = useState([]);
  const trendingTvShows = ()=>{
   InstanceAxios().get("https://api.themoviedb.org/3/trending/tv/day?language=en-US").then((res)=>{
    changeTrendingTvshows(res.data.results)
   })
  }
 // for fetching the data at page load
  useEffect(()=>{
   trendingMovies();
   trendingTvShows();
  },[]);

    return(
        <>
          <Carasol/>
         <div className="heading-cards">Trending Movies</div>
         <div className="show-card">
         {
        trendingMoviesVar.map((item)=>{
            return <Card key = {item.id} details = {item}/>
         })
         }
         </div>
         <div className="heading-cards">Trending TV Shows</div>
         <div className="show-card">
         {
         trendingTVshowsVar.map((item)=>{
            return <Card key= {item.id} details = {item}/>
         })
         }
         </div>
        </>
    )
}

export default Home;