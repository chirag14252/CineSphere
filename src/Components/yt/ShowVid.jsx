import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import InstanceAxios from "../../axios";
import { useNavigate } from "react-router-dom";
import "./ShowVid.css"
// keeping the state of the data obtained from API
// const [videoVar,changeVar] = useState([])

// const movie_id = location.state.id;
// const videoApi = ()=>{
//  InstanceAxios().get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`).then(
//     (res)=>{
//       console.log(res);
//     }
//  )
// }

// useEffect(()=>{
//    videoApi();
// },[]);
const ShowVid =()=>{
  const location = useLocation();
  const [videoVar,changeVar] = useState([])
  const movie_id = location.state.id;
  console.log(location)
const videoApi = ()=>{
 InstanceAxios().get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`).then(
    (res)=>{
      changeVar(res.data.results);
    }
 )
}
useEffect(()=>{
  videoApi();
},[]);

const navigate = useNavigate();
  return(
    <>
    <div className="vid_top">
    <div className="vid_heading">Watch Youtube related to {location.state.title}</div>
    <button onClick={()=>{navigate("/home")}}>back</button>
    </div>
   <div className="youtube-div">
    {
    videoVar.map((item,idx)=>{
     return(
      <div key={idx} className="card_video">
        <iframe src={`https://www.youtube.com/embed/${item.key}`} width={700} height={400} className="iframe_vid"></iframe>
      </div>
     )
    })
  }
  </div>
  </>
  );
   
}

export default ShowVid;