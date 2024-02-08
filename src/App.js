import React from 'react'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Mha from './Mha.jsx'
import Portfolie from './Portfolie.jsx'
import Port from './Port.jsx'
import {RouterProvider,Routes,createBrowserRouter} from "react-router-dom"

export default function App(){
let routes = createBrowserRouter([
  {path: '/', element:<Port/>},
  {path: '/Portfolie', element:<Portfolie/>},
  {path: '/Contact', element:<Contact/>},
  {path: '/About', element:<About/>},
])
    return (
      <>
      <Navbar/>
      <RouterProvider router={routes}/>
      <Mha/>
      </>
    )
}