import "./App.css"
import {Routes, Route} from "react-router-dom"
import FrontPage from "./Components/Front-page/FrontPage" 
import Popular from "./Components/Pages/popular/Popular"
const App = ()=>{
    return(
        <>
          <Routes>
            <Route path ="/" Component={FrontPage}/>
            <Route path="/Popular" Component={Popular}/>
          </Routes>
        </>
    )
}

export default App;