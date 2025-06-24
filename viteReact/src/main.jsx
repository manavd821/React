import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime"
// import ReactDOM from React

function MyApp(){
  return (
    <div>
        <h1>Custome app!</h1>
    </div>
  )
}
// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target = '_blank'> Visit Google</a>
)

const anotherUser = 'Manav and Manav'

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google',
  anotherUser

)

createRoot(document.getElementById('root')).render(
  reactElement
)
