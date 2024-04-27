
export default function Add() {
  return (
    <div className="flex justify-center ">
      <div className="w-[1400px] py-[50px]">
        <h1 className="text-3xl font-semibold text-gray-500">Add New Gig</h1>
        <div className="flex justify-between gap-[100px] mt-10">
          {/* info */}
          <div  className="flex flex-col flex-1 gap-5">
            <label htmlFor="" className="text-2xl">Title</label>
            <input type="text" placeholder="eg: I will do something I'm really at " className="border border-black p-3  rounded"
            />
            <label htmlFor="" className="text-xl">Category</label>
            <select name="" id="" className="border border-black p-2  rounded">
              <option value="">Design</option>
              <option value="">Web Development</option>
              <option value="">Animation</option>
              <option value="">Music</option>
            </select>
            <label htmlFor="" className="text-xl">Cover Image</label>
            <input type="file" className="p-2 " />
            <label htmlFor="" className="text-xl">Upload Images</label>
            <input type="file" className="p-2 " />
            <label htmlFor="" className="text-xl">Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Brief descriptions to introduce your service to customers" 
            className="h-[330px] p-2 rounded border-2 border-gray-400"
            ></textarea>
            <button className="p-3 bg-green-600 text-white text-xl font-semibold rounded">Create</button>
          </div>
          {/* details  */}
          <div className="flex flex-col flex-1 justify-between gap-5">
            <label htmlFor="" className="text-xl">Service Title</label>
            <input type="text" placeholder="eg: one page web design" className="border border-black p-3  rounded" />
            <label htmlFor="" className="text-xl">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Short description of your service"
            className="p-2 border  border-black rounded h-24 "
            ></textarea>
            <label htmlFor="" className="text-xl">Delivery Time (eg : 3 days)</label>
            <input type="text" className="border border-black p-2  rounded " />
            <label htmlFor="" className="text-xl">Revision Number</label>
            <input type="text" className="border border-black p-2  rounded " />
            <label htmlFor="" className="text-xl">Add Features</label>
            <input type="text" placeholder="eg: page design" className="border border-black p-2  rounded" />
            <input type="text" placeholder="eg: file uploading" className="border border-black p-2  rounded" />
            <input type="text" placeholder="eg: setting up a domain" className="border border-black p-2   rounded" />
            <input type="text" placeholder="eg: hosting" className="border border-black p-2   rounded" />
            <label htmlFor="" className="text-xl">Price</label>
            <input type="text" className="border border-black p-2  rounded " />
          </div>
        </div>
      </div>
    </div>
  )
}
