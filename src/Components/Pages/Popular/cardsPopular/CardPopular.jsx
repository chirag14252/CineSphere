import "./CardPopular.css"

const CardPopular = (props) =>{
  console.log(props);
    return(
    <div className="card-popular">
     <div className="movie-img-popular">
      <img  src ={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.details.poster_path}`} alt ="" />
     </div>
      <div className="card-body-popular">
      <h2 className="movie-title-popular">{props.details.title}</h2>
      <h2 className="movie-year-popular">{props.details.vote_average}</h2>
      </div>
    </div>
    

   
    )
}

export default CardPopular;