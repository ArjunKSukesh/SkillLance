import { useEffect, useRef, useState } from "react";
import newRequest from "../utils/newRequest.js";
import { useNavigate } from 'react-router-dom';


export default function Login({ setShowLogin, setShowSignup }) {
  const [isChecked, setIsChecked] = useState(false);
  const outerDiv = useRef(null);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target === outerDiv.current) {
      setShowLogin(false)
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


  const handleSignup = () => {
    setShowSignup(true);
    setShowLogin(false)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //1 way
      // const res = await axios.post('http://localhost:3000/api/auth/login',{username, password},{withCredentials:true});

      // another way
      const res = await newRequest.post('/auth/login', { username, password });
      
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      navigate('/');
      setShowLogin(false)
    } catch (err) {
      setError(err.response.data);
    }

  }

  return (
    <div
      ref={outerDiv}
      onClick={handleClick}
      className=" flex flex-col justify-center items-center fixed w-full h-full" style={{ zIndex: 999, backgroundColor: '#00000090' }}
    >
      <form onSubmit={handleSubmit}
        className="bg-white w-[800px] h-[550px] flex flex-col justify-center items-center gap-5 rounded-lg">
        <h1 className="text-center font-bold text-3xl">Login</h1>

        <input type="text" placeholder="Username" required name="username" onChange={e => setUsername(e.target.value)}
          className="w-96 py-3 px-2 focus:outline-none rounded bg-gray-100 border border-gray-300 text-lg" />
        <input type="text" placeholder="Password" required name="password" onChange={e => setPassword(e.target.value)}
          className="w-96 p-2 focus:outline-none rounded bg-gray-100 border border-gray-300 text-lg" />


        <div className="flex justify-center gap-2 items-center">
          <input type="checkbox" onChange={handleChecked} className="w-5 h-5 cursor-pointer" />
          <p className="text-[16px]">By continuing, I agree to the terms & conditions</p>
        </div>
        <button disabled={!isChecked} type="submit"
          className={isChecked ? 'cursor-pointer bg-green-600 text-white w-96 py-2 font-semibold text-lg rounded hover:opacity-85' : 'cursor-not-allowed bg-gray-200 text-gray-400 w-96 py-2 font-semibold text-lg rounded '}
        >Login</button>

        {error && error}
        <div>
          <p className="text-lg">Create an account? <span className="cursor-pointer underline italic" onClick={handleSignup}
          >
            Click here</span></p>
        </div>
      </form>
    </div>
  )
}
