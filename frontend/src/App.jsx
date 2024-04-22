
import Navbar from "./components/Navbar";
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Gigs from './pages/Gigs';
import Gig from './pages/Gig';
import Orders from './pages/Orders';
import MyGigs from './pages/MyGigs';
import Add from './pages/Add';
import Messages from './pages/Messages';
import Message from './pages/Message';
import Login from "./pages/Login";




import { useState } from "react";
import Signup from "./pages/Signup";



export default function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const Layout = () => {
    return(
      <>
      {showLogin && <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>}
      {showSignup && <Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin}/> }
      <div>
        <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
        <Outlet/>
        <Footer/>
      </div>
      </>
    )
  }


  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      children:[
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/gigs',
          element : <Gigs/>
        },
        {
          path : '/gig/:id',
          element : <Gig/>
        },
        {
          path : '/orders',
          element:<Orders/>
        },
        {
          path : '/myGigs',
          element:<MyGigs/>
        },
        {
          path : '/add',
          element:<Add/>
        },
        {
          path : '/messages',
          element:<Messages/>
        },
        {
          path : '/message/:id',
          element:<Message/>
        },
        
        

      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  )
}
