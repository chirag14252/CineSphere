import "./Card.css"

const Card = (props) =>{
    return(
    <div className="card">
     <div className="movie-img">
      <img  src ={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.details.backdrop_path}`} alt ="" />
     </div>
      <div className="card-body">
      <h2 className="movie-title">{props.details.title?props.details.title:props.details.name}</h2>
      <h2 className="movie-year">{}</h2>
      </div>
    </div>
    

   
    )
}

export default Card;