import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './routes/layout.route.jsx'
import About from './component/About.component.jsx'
import Home from './component/Home.component.jsx'
import Contact from './component/Contact.component.jsx'
import User from './component/User.component.jsx'
import Github, { githubInfoLoader } from './component/Github.component.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>,
//       },
//       {
//         path : "about",
//         element : <About/>,
//       },
//       {
//         path : "contact",
//         element : <Contact/>,
//       },
//     ],
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader = {githubInfoLoader}
      path='github/:gitname?' 
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
