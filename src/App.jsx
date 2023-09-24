import "./App.css"
import {Routes, Route} from "react-router-dom"
import FrontPage from "./Components/Front-page/FrontPage" 
import Popular from "./Components/Pages/popular/Popular"
import Register from "./Components/Register/Register"
import ShowVid from "./Components/yt/ShowVid"
const App = ()=>{
    return(
        <>
          <Routes>
            <Route path ="/" Component={Register}/>
            <Route path ="/home" Component={FrontPage}/>
            <Route path="/Popular" Component={Popular}/>
            <Route path="/video" Component={ShowVid}/>
          </Routes>
        </>
    )
}

export default App;