import { useEffect, useState } from "react";
import Nav from "../../navbar/Nav"
import InstanceAxios from "../../../axios";
import "./Popular.css"
import CardPopular from "./cardsPopular/CardPopular";
import NextPrev from "./next/prev/NextPrev";


const Popular = ()=>{
    //for changing the page number:
    const [num,numchange]= useState(1);
    const changePageNum = (data)=>{
     numchange(data);
    }
    

    //for keeping the states of movie and series
    const [trackvar,trackChanges] = useState(0);
    const [Popular,PopularChanges] = useState(null);
    const popularFetch = ()=>{
        InstanceAxios().get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${num}`).then(
            (res)=>{
                trackChanges(0) //state for button 

                PopularChanges(res.data.results);
            }
        )
    }
    const [PopularTV,PopularTVshow] = useState(null);
    const popularTVfetch = ()=>{
        InstanceAxios().get(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${num}`).then(
            (res)=>{
                trackChanges(1);
                PopularTVshow(res.data.results);
                console.log(res);
            }
        )
    }
    useEffect(
        ()=>{
            popularFetch();
        },[num]
    )

    
    return(
        <>
        <Nav/>
        <div className="choice_in_popular">
            <button onClick={popularFetch}>Movies</button>
            <button onClick={popularTVfetch}>TV</button>
            <NextPrev page = {changePageNum}/>
        </div>
      
        <div className="card-show">
        {
           trackvar? (PopularTV?PopularTV.map((item)=>{
                return <CardPopular key = {item.id} details = {item}/>
            }):null)
            :
            (Popular?Popular.map((item)=>{
                return <CardPopular key = {item.id} details = {item}/>
            }):null)
        }
        </div>
        </>
    )
}

export default Popular;