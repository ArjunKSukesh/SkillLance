import { useReducer, useState } from "react"
import { INITIAL_STATE, gigReducer } from "../reducers/gigrReducer.js"
import upload from "../utils/upload.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest.js";
import {useNavigate} from 'react-router-dom'

export default function Add() {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE)

  const handleChange = (e) => {
    dispatch({
      type : "CHANGE_INPUT",
      payload : {name : e.target.name, value : e.target.value},
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type : "ADD_FEATURES",
      payload : e.target[0].value,
    });
    e.target[0].value= "";
  };

  const handleUpload =async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async(file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({type:"ADD_IMAGES", payload: {cover, images}});
    } catch (error) {
      console.log(error);
    }
    
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();


  const mutation = useMutation({
    mutationFn : (gig) => {
      return newRequest.post('/gigs/create',gig);
    },
    onSuccess : () => {
      queryClient.invalidateQueries(["myGigs"]);
    }

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate('/myGigs')

  }

  return (
    <div className="flex justify-center ">
      <div className="w-[1400px] py-[50px]">
        <h1 className="text-3xl font-semibold text-gray-500">Add New Gig</h1>
        <div className="flex justify-between gap-[100px] mt-10">
          {/* info */}
          <div  className="flex flex-col flex-1 gap-5">
            <label htmlFor="" className="text-2xl">Title</label>
            <input name="title" onChange={handleChange} type="text" placeholder="eg: I will do something I'm really at " className="border border-black p-3  rounded"
            />
            <label htmlFor="" className="text-xl">Category</label>
            <select name="cat" id="cat" onChange={handleChange} className="border border-black p-2  rounded">
              <option value="design">Design</option>
              <option value="web-development">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <div className="flex items-center">
              <div className="flex flex-col gap-5">
            <label htmlFor="" className="text-xl">Cover Image</label>
            <input type="file" onChange={e => setSingleFile(e.target.files[0])} className="p-2 " />
            <label htmlFor="" className="text-xl">Upload Images</label>
            <input type="file" multiple onChange={e => setFiles(e.target.files)} className="p-2 " />
              </div>
              <button onClick={handleUpload} className="p-2 bg-green-600 h-12  text-white text-xl font-semibold rounded">{uploading ? 'uploading' : 'upload'}</button>
            </div>


            <label htmlFor="" className="text-xl">Description</label>
            <textarea name="desc" onChange={handleChange} id="" cols="30" rows="10" placeholder="Brief descriptions to introduce your service to customers" 
            className="h-[330px] p-2 rounded border-2 border-gray-400"
            ></textarea>
            <button onClick={handleSubmit} className="p-3 bg-green-600 text-white uppercase  text-xl font-semibold rounded">Create</button>
          </div>
          {/* details  */}
          <div className="flex flex-col flex-1 justify-between gap-0">
            <label htmlFor="" className="text-xl">Short Title</label>
            <input type="text" name="shortTitle" onChange={handleChange} placeholder="eg: one page web design" className="border border-black p-3  rounded" />
            <label htmlFor="" className="text-xl">Short Description</label>
            <textarea name="shortDesc" onChange={handleChange} id="" cols="30" rows="10" placeholder="Short description of your service"
            className="p-2 border  border-black rounded h-24 "
            ></textarea>
            <label htmlFor="" className="text-xl">Delivery Time (eg : 3 days)</label>
            <input type="number" name="DeliveryTime" onChange={handleChange} className="border border-black p-2  rounded " />
            <label htmlFor="" className="text-xl">Revision Number</label>
            <input type="number" name="revisionNumber" onChange={handleChange} className="border border-black p-2  rounded " />

            <label htmlFor="" className="text-xl">Add Features</label>
            <form action="" onSubmit={handleFeature} className="flex gap-3">
            <input type="text" placeholder="eg: page design" className="border border-black rounded   w-10/12 p-2" />
            <button type="submit" className="p-2  bg-green-600 w-[60px] text-white rounded text-lg font-semibold">add</button>
            </form>

            <div className="flex gap-1">
              {state?.features?.map(f => (
              <div key={f} className="flex  gap-1">
                <button onClick={() => dispatch({type:"REMOVE_FEATURES", payload: f})} className="p-3  text-red-500 w-[130px] border border-red-600 rounded text-lg font-semibold justify-evenly flex gap-2">
                  {f}
                  <span>X</span>
                </button>
              </div>
              ))}
            </div>

            
            <label htmlFor="" className="text-xl">Price</label>
            <input type="text" name="price" onChange={handleChange} className="border border-black p-2  rounded " />
          </div>
        </div>
      </div>
    </div>
  )
}
