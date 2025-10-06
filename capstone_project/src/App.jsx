import Home from "./routes/home/home.component"
import { Routes, Route, Outlet, Link } from 'react-router'
import Navigation from "./routes/navigation/navigation.component"
const Shop = () => (
      <>
        <h2>I'm shop page</h2>
        <Outlet/>
      </>
)
const Market = () => (<h2>I'm Market page</h2>)



const App = () => {
    return(
      <Routes>
        
        <Route path="/" element= {<Navigation/>}>
          <Route index element= {<Home/>}/>
          <Route path="shop" element= {<Shop/>}/>
          <Route path="market" element= {<Market/>}/>

        </Route>
          
      </Routes>
    )
}

export default App
