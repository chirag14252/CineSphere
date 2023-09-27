import "./Card.css"
import {useNavigate} from "react-router-dom";
const Card = (props) =>{
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/video",{state:{id:props.details.id,title:props.details.title}});
   }
  const addFav = ()=>{
    navigate("/favourite",{state:{list:props.details}})
  }
    return(
    <div className="card">
     <div className="movie-img" onClick={handleClick}>
     
      <div className="play_button" ><i class="fa-solid fa-play fa-2xl"></i></div>
      <img  src ={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.details.backdrop_path}`} alt ="" className="img-rendered"/>
     </div>
      <div className="card-body">
      <h2 className="movie-title">{props.details.title?props.details.title:props.details.name}</h2>
      <h2 className="movie-title"><i class="fa-solid fa-star" style={{color:"black"}}></i>{props.details.title?props.details.vote_average:props.details.vote_average}</h2>
      <div>
      <button className="add_fav_button" onClick ={addFav}>Add to Wishlist+</button>
      </div>
      </div>
    </div>
    

   
    )
}

export default Card;