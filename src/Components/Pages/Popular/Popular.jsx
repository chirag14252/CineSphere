import { useEffect, useState } from "react";
import Nav from "../../navbar/Nav"
import InstanceAxios from "../../../axios";
import "./Popular.css"
import CardPopular from "./cardsPopular/CardPopular";


const Popular = ()=>{
    const [Popular,PopularChanges] = useState();
    const popularFetch = ()=>{
        InstanceAxios().get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1").then(
            (res)=>{
                PopularChanges(res.data.results);
            }
        )
    }
    const [PopularTV,PopularTVshow] = useState();
    const popularTVfetch = ()=>{
        InstanceAxios().get("").then(
            (res)=>{
                PopularTVshow(res.data.results);
            }
        )
    }
    useEffect(
        ()=>{
            popularFetch();
        },[]
    )
    return(
        <>
        <Nav/>
        <div className="choice_in_popular">
            <button onclick={popularFetch}>Movies</button>
            <button onclick={popularTVfetch}>TV</button>
        </div>
        <div className="card-show">
          {
          Popular?Popular.map((item)=>{
           return <CardPopular key= {item.id} details = {item}/>
          }):null
          } 
        </div>
        </>
    )
}

export default Popular;