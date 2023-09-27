import "./Favourite.css"
import { useLocation } from "react-router-dom";
const Favourite = () =>{
    const favList = useLocation();
    console.log(favList);
    return(
        <h1>Your WishList</h1>
        // map all the array in which the data will be stored.
    )
}

export default Favourite;