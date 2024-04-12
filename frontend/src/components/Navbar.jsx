import { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';

export default function Navbar() {

    const [active, setActive] = useState(false);
    const[open, setOpen] = useState(false);

    const {pathname} = useLocation();

     
    const isActive = () => {
        window.scrollY > 0 ?  setActive(false) : setActive(true)
        // setActive(window.scrollY > 0)
    };
    useEffect(() => {
        window.addEventListener('scroll',isActive);
        return () => {
            window.removeEventListener('scroll',isActive);
        };
    },[])


    const currentUser = {
        id : 1,
        username : 'Arjun K ',
        isSeller : true
    }
  return (
    <header className={active || pathname !== '/' ? 'bg-green-800 text-white' : 'bg-white text-black'}
    style={{transition : '0.5s all ease', position:'sticky',top : 0, display:'flex', flexDirection:'column',border:'none', zIndex:999}}>
        <div className="w-full flex justify-between items-center p-5 ">
            <div className="text-4xl font-extrabold italic flex items-center lg:ml-9 sm:ml-0   ">
                <Link to={'/'}>
                <span className="">Skill</span>
                <span>Lance</span>
                </Link>
            </div>
            <div className="flex gap-10  items-center lg:mr-9 ">
                <span className="hidden lg:inline  cursor-pointer hover:underline   font-semibold text-xl">Business</span>
                <span className="hidden lg:inline cursor-pointer hover:underline    font-semibold text-xl">Explore</span>
                <span className="hidden lg:inline  cursor-pointer hover:underline   font-semibold text-xl">English</span>
               { !currentUser ?.isSeller && 
                <span className=" font-semibold lg:text-xl   cursor-pointer hover:underline bg-blue-300 w-[66px]">Sign in</span>
                } 
                { !currentUser && 
                <button className="  font-semibold cursor-pointer rounded  border border-white px-4 py-1 hover:bg-green-600 lg:text-xl">Join</button>
                }
                {currentUser &&  
                <div className="flex items-center gap-2 relative" onClick={() => setOpen(!open)}>
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    />
                    <span className="cursor-pointer">
                        {currentUser?.username} 
                    </span>
                  {open &&  
                   <div className="absolute top-[50px] right-0 p-[20px] bg-white border-1 border-gray-50 rounded-lg flex flex-col gap-3 text-gray-400 w-40">
                       {currentUser?.isSeller && (
                            <>
                            <Link to={'/gigs'}>Gigs</Link>
                            <Link to={'/add'}>Add new Gig</Link>
                            </>
                         )} 
                        <Link to={'/orders'}>Orders</Link>
                        <Link to={'/messages'}>Messages</Link>
                        <Link to={'/'}>Logout</Link>
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
