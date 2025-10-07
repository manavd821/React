import Home from "./routes/home/home.component"
import { Routes, Route, Outlet, Link } from 'react-router'
import Navigation from "./routes/navigation/navigation.component"
import SignIn from "./routes/sign-in/sign-in.component"
const Shop = () => (
      <>
        <h2>I'm shop page</h2>
        <Outlet/>
      </>
)


const App = () => {
    return(
      <Routes>
        
        <Route path="/" element= {<Navigation/>}>
          <Route index element= {<Home/>}/>
          <Route path="shop" element= {<Shop/>}/>
          <Route path="signin" element= {<SignIn/>}/>

        </Route>
          
      </Routes>
    )
}

export default App
