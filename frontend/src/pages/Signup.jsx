import { useEffect, useRef, useState } from "react";
import newRequest from "../utils/newRequest.js";
import { useNavigate } from 'react-router-dom';


export default function Signup({setShowSignup, setShowLogin }) {
    const [isChecked, setIsChecked] = useState(false);
    const outerDiv = useRef(null);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleClick = (e) => {
        if (e.target === outerDiv.current) {
            setShowSignup(false)
        }
    };

    const handleChecked = () => {
        setIsChecked(!isChecked);
    }

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post('http://localhost:3000/api/auth/login',{username, password},{withCredentials:true});
            const res = await newRequest.post('/auth/login', { username, password });
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            navigate('/');
            setShowSignup(false)
        } catch (err) {
            setError(err.response.data);
        }

    }

    const handleLogin = () => {
        setShowLogin(true);
        setShowSignup(false)
    }

    return (
        <div
            ref={outerDiv}
            onClick={handleClick}
            className=" flex flex-col justify-center items-center fixed w-full h-full" style={{ zIndex: 999, backgroundColor: '#00000090' }}
        >
            <form onSubmit={handleSubmit}
                className="bg-white w-[800px] h-[550px] flex flex-col justify-center items-center gap-5 rounded-lg">
                <h1 className="text-center font-bold text-3xl">Signup</h1>
               
                        
                   
                        <input type="text" placeholder="username" required
                            className="w-96 py-3 px-2 focus:outline-none rounded bg-gray-100 border border-gray-300 text-lg" />
                        <input type="text" placeholder="email" required
                            className="w-96 py-3 px-2 focus:outline-none rounded bg-gray-100 border border-gray-300 text-lg" />
                        <input type="text" placeholder="Password" required
                            className="w-96 py-3 px-2 focus:outline-none rounded bg-gray-100 border border-gray-300 text-lg" />
              

                <div className="flex justify-center gap-2 items-center">
                    <input type="checkbox" onChange={handleChecked} className="w-5 h-5 cursor-pointer" />
                    <p className="text-[16px]">By continuing, I agree to the terms & conditions</p>
                </div>
                
                    <button
                        disabled={!isChecked}
                        className={isChecked ? 'cursor-pointer bg-green-600 text-white w-96 py-2 font-semibold text-lg rounded hover:opacity-85' : 'cursor-not-allowed bg-gray-200 text-gray-400 w-96 py-2 font-semibold text-lg rounded hover:opacity-85'}
                    >SignUp</button>

                
                {error && error}
                <div>
                    
                        <p className="text-lg">Already have an account? <span className="cursor-pointer underline italic" onClick={handleLogin} >Login here</span></p>
                        
                       
                    
                </div>
            </form>
        </div>
    )
}
