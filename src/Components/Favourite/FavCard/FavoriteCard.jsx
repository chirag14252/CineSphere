import "./FavoriteCard.css";
import axios from "axios";
const FavoriteCard = (props) =>{
const toRemove = (toDelete)=>{
  axios.delete("http://localhost:3000/deleteFav",{data : toDelete}).then((res)=>{
  console.log(res);
  })
}
    return(
      <div className="card">
      <div className="m" >
      
       <div className="play_button" ><i class="fa-solid fa-play fa-2xl"></i></div>
       <img  src ={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.data.movie_poster}`} alt ="" className="img-rendered img-rendered1"/>
      </div>
       <div className="card-body">
       <h2 className="movie-title">{props.data.movie_name}</h2>
       <div>
       <button className="rem-buttom" onClick ={()=>{
       const toDelete = {
        "movie_id":props.data.movie_id
       }
      toRemove(toDelete);
       }}>Remove</button>
       </div>
       </div>
     </div>
    )
}

export default FavoriteCard;