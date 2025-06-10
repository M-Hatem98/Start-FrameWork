

import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound'

let route = createBrowserRouter([
  {path:'' , element : <Layout/> , children : [
    {index : true , element : <Home/>},
    {path:'about' , element : <About/>},
    {path:'portfolio' , element : <Portfolio/>},
    {path:'contact' , element : <Contact/>},
    {path:'*' , element : <NotFound/>},
  ]},
])

function App() {


  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
