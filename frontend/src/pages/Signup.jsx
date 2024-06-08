import classNames from 'classnames';
import { useState } from 'react';
import upload from '../utils/upload.js';
import newRequest from '../utils/newRequest.js';
import {useNavigate} from 'react-router-dom';



function Signup() {
    const [isSelected, setIsSelected] = useState(false);
    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username : '',
        email :'',
        password:'',
        img:'',
        country:'',
        isSeller:'',
        desc:''
    });

    const navigate = useNavigate();

    

    const handleChange = (e) =>
    {
        
        setUser((prev) => {
            return {...prev, [e.target.name]:e.target.value};
        });

    };


    const handleSubmit =async (e) => {
        e.preventDefault();

        const url =await upload(file)
        try {
            await newRequest.post("/auth/register",{...user,img: url, isSeller : isSelected});
             navigate('/')
            
        } catch (err) {
            console.log(err)   
        }

    }

    
    return (
        <div className='w-full flex justify-center'>
            <form className='flex justify-between w-9/12   gap-12 p-5' onSubmit={handleSubmit}>

                <div className="flex flex-col gap-5 w-2/4  p-2 ">
                    <h1 className='text-2xl font-semibold'>Create a new account</h1>

                    <label htmlFor="username" className='text-lg text-gray-500'>Username</label>
                    <input 
                    type="text" 
                    name='username' 
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 '/>

                    <label htmlFor="" className='text-lg text-gray-500'>Email</label>
                    <input 
                    type="text" 
                    name='email'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 '/>

                    <label htmlFor="" className='text-lg text-gray-500'>Password</label>
                    <input 
                    type="text" 
                    name='password'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 '/>

                    <label htmlFor="" className='text-lg text-gray-500'>Profile Picture</label>
                    <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                    className='rounded p-3 h-14 border border-gray-400 ' />

                    <label htmlFor="" className='text-lg text-gray-500'>Phone Number</label>
                    <input 
                    type="text" 
                    name='phone'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 ' />

                    <button className='bg-green-600 text-white rounded text-xl font-semibold p-2 '>Register</button>
                </div>
                <div className='flex flex-col  gap-4 w-2/4  p-2'>
                    <h1 className='text-2xl font-semibold'>I want to become a seller</h1>

                    <div className='flex gap-2'>
                        <p className='text-lg text-gray-500'>Activate the seller account</p>
                        <div 
                        // onChange={handleSeller}
                        onClick={() => {
                            setIsSelected(!isSelected);
                        }}
                        className={classNames("flex items-center w-12 h-6  rounded-full transition-all duration-500",{
                            'bg-blue-600':isSelected,
                            'bg-gray-400':!isSelected
                        })}>
                            <span className={classNames("w-5 h-5 bg-white  rounded-full transition-all duration-500 shadow-lg ",{
                                'ml-6':isSelected,
                                'ml-1':!isSelected
                            })}></span>
                        </div>
                    </div>

                    

                    <label htmlFor="" className='text-lg text-gray-500'>Description</label>
                    <textarea 
                    name="desc" 
                    id="" 
                    cols="20" 
                    rows="4" 
                    onChange={handleChange}
                    className='rounded p-2  border border-gray-400 '></textarea>

                    <label htmlFor="" className='text-lg mt-2 text-gray-500'>Address</label>
                    <input 
                    type="text" 
                    name='address.line1'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 ' placeholder='House Name'/>
                    <input 
                    type="text" 
                    name='address.line2'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 ' placeholder='Street'/>
                    <input 
                    type="text" 
                    name='address.city'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 ' placeholder='City'/>
                    <input 
                    type="text" 
                    name='address.state'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 ' placeholder='State'/>
                    <input 
                    type="text" 
                    name='address.postalCode'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 ' placeholder='Postal Code'/>
                    <input 
                    type="text" 
                    name='address.country'
                    onChange={handleChange}
                    className='rounded p-2 h-12 border border-gray-400 ' placeholder='Country'/>
                </div>

            </form>
        </div>
    )
}

export default Signup
