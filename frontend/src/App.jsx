
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
import Signup from "./pages/Signup";
import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';






export default function App() {

  const [showLogin, setShowLogin] = useState(false);
  const queryClient = new QueryClient();


  const Layout = () => {
    return(
      <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div>
      <QueryClientProvider client={queryClient}>
        <Navbar setShowLogin={setShowLogin} />
        <Outlet/>
        <Footer/>
    </QueryClientProvider>
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
        {
          path : '/register',
          element:<Signup/>
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
