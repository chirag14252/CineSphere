import "./Card.css"
import {useNavigate} from "react-router-dom";
const Card = (props) =>{
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/video",{state:{id:props.details.id,title:props.details.title}});
   }
    return(
    <div className="card">
     <div className="movie-img" onClick={handleClick}>
      <button className="add_fav_button"><i class="fa-solid fa-plus" style={{borderRadius:"30px"}}></i></button>
      <div className="play_button" ><i class="fa-solid fa-play fa-2xl"></i></div>
      <img  src ={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.details.backdrop_path}`} alt ="" className="img-rendered"/>
     </div>
      <div className="card-body">
      <h2 className="movie-title">{props.details.title?props.details.title:props.details.name}</h2>
      <h2 className="movie-title"><i class="fa-solid fa-star" style={{color:"black"}}></i>{props.details.title?props.details.vote_average:props.details.vote_average}</h2>
      </div>
    </div>
    

   
    )
}

export default Card;