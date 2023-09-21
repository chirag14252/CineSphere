import { useEffect } from "react";
import InstanceAxios from "../../../axios";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carasol.css"
const Carasol = () => {
    const [movies, changesMovies] = useState([]);
    //fetching data
    const fetchApis = () => {
        InstanceAxios().get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc").then(
            (res) => {
                changesMovies(res.data.results);
            }
        )
    }



    useEffect(() => {
        fetchApis();
    }, []);


    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,

    };


    return (
        <div className="imgslider">
            <Slider {...settings} className="img-section">
                {movies.map((item,idx) => (
                    <div key={item.id} >
                         <p className="heading-slideshow">#{idx+1}</p>
                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carasol;