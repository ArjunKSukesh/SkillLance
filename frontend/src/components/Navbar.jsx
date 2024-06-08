import { useEffect, useState } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import newRequest from "../utils/newRequest.js";

export default function Navbar({setShowLogin}) {

    const [active, setActive] = useState(false);
    const[open, setOpen] = useState(false);
    const navigate = useNavigate();

    const {pathname} = useLocation();

     
    const isActive = () => {
        window.scrollY > 0 ?  setActive(true) : setActive(false)
        // setActive(window.scrollY > 0)
    };
    useEffect(() => {
        window.addEventListener('scroll',isActive);
        return () => {
            window.removeEventListener('scroll',isActive);
        };
    },[]);


    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const handleLogout = async () => {
        try {
            await newRequest.post('/auth/logout');
            localStorage.setItem('currentUser',null);
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <header className={active || pathname !== '/' ? 'bg-white text-black' :  'bg-green-800 text-white'}
    style={{transition : '0.5s all ease', position:'sticky',top : 0, display:'flex', flexDirection:'column',border:'none', zIndex:99}}>
        <div className="w-full flex justify-between items-center p-5 ">
            <div className="text-4xl font-extrabold italic flex items-center lg:ml-9 sm:ml-0   ">
                <Link to={'/'}>
                <span className="">Skill</span>
                <span>Lance</span>
                </Link>
            </div>
            <div className="flex gap-10  items-center lg:mr-9 ">               
               { !currentUser?.isSeller && 
                <span className=" font-semibold lg:text-xl   cursor-pointer hover:underline  text-center w-[150px]"                
                >Become a Seller</span>
                }  
               { currentUser? <></> : 
                <span className=" font-semibold lg:text-xl   cursor-pointer hover:underline  w-[66px]"
                onClick={() => navigate('/register')}
                >Sign in</span>
                }  
                { !currentUser && 
                <button 
                className={ !active || pathname!== '/' ? 'border border-green-600 text-green-600 px-4 py-1 font-semibold cursor-pointer rounded lg:text-xl' :"font-semibold cursor-pointer rounded  border border-green-600 text-green-600 px-4 py-1 hover:bg-green-600 hover:text-white lg:text-xl"}
                onClick={()=> setShowLogin(true)}
                >Join</button>
                }
                {currentUser &&  
                <div className="flex items-center gap-2 relative" onClick={() => setOpen(!open)}>
                    <img src={currentUser.img || "/noavatar.png"} alt="profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    />
                    <span className="cursor-pointer">
                        {currentUser?.username} 
                    </span>
                  {open &&  
                   <div className="absolute top-[50px] right-0 p-[20px] bg-white border-1 border border-gray-400 rounded-lg flex flex-col gap-3 text-gray-400 w-40">
                       {currentUser?.isSeller && (
                            <>
                            <Link to={'/myGigs'}>Gigs</Link>
                            <Link to={'/add'}>Add new Gig</Link>
                            </>
                         )} 
                        <Link to={'/orders'}>Orders</Link>
                        <Link to={'/messages'}>Messages</Link>
                        <Link onClick={handleLogout}>Logout</Link>
                    </div>
                    } 
                </div> 
                } 
            </div>
        </div>
        {(!active || pathname !=='/') && (
        <>
        <div className=" flex gap-3 items-center justify-evenly p-2 border-b" >
            <Link to={'/'}>
            Graphics & Design
            </Link>
            <Link to={'/'}>
            Video & Animation
            </Link>
            <Link to={'/'}>
            Writing & translation
            </Link>
            <Link to={'/'}>
            AI Services
            </Link>
            <Link to={'/'}>
            Digital Marketing
            </Link>
            <Link to={'/'}>
            Music & Audio
            </Link>
            <Link to={'/'}>
            Programming & Tech
            </Link>
            <Link to={'/'}>
            Business
            </Link>
            <Link to={'/'}>
            Lifestyle
            </Link>
        </div>
        </>
        )}
    </header>
  )
}
