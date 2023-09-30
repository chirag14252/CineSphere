import "./Favourite.css"
import axios from "axios"
import FavoriteCard from "./FavCard/FavoriteCard";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Favourite = () =>{
  // keeping a state of movies
  const [favoriteMove,changefav] = useState(null);
    const renderFav = ()=>{
     axios.get("http://localhost:3000/get-fav").then((res)=>{
       changefav(res.data);
     })
    }
    useEffect(()=>{
     renderFav();
    },[favoriteMove])



const navigate = useNavigate();
    return(
        <>
        <div className="head-fav">
        <div>Your WishList : </div>
        <button onClick={()=>{
          navigate("/home")
        }}>back</button>
        </div>
         <div className="fav_body">
           {
           favoriteMove?favoriteMove.map((item,idx)=>{
                return <FavoriteCard key={idx} data ={item}/>
           }):"No data present"
           }
         </div>
         </>
    )
}

export default Favourite;