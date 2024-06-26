import { useEffect, useRef, useState } from "react"
// import { gigs } from "../data";
import GigCard from "../components/GigCard";
import { useLocation } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import newRequest from "../utils/newRequest.js";




export default function Gigs() {

  const [sort, setSort] = useState('sales');
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();



  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs/allgigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
        .then(res => res.data)
        .catch(error => console.log(error))
  }); 
  
  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  };

  const apply = () => refetch();

  useEffect(() => {
    refetch();
  }, [sort]);



  return (
    <div className="  w-full flex justify-center ">
      <div className="w-11/12 flex flex-col gap-3  ml-10 mr-10 p-3  ">
        <span className="uppercase">SkillLance {'>'} Graphics & Design {'>'} </span>
        <h1 className="text-2xl font-bold">AI Artists</h1>
        <p >Explore the boundaries of art and technology with SkillLance's AI artists</p>

        <div className="items-center flex justify-between">

          <div className="flex gap-3  items-center p-1">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" className="border border-black rounded p-[3px]" />
            <input ref={maxRef} type="number" placeholder="max" className="border border-black rounded p-[3px]" />
            <button onClick={apply} className="bg-green-700 p-1 w-16 text-white rounded font-semibold">Apply</button>
          </div>

          <div className="flex   gap-2 items-center  relative ">

            <span className="font-light text-black">Sort by</span>
            <span className="font-medium">{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
            <img src="/down.png" alt="" className="w-8 cursor-pointer" onClick={() => setOpen(!open)} />
            {open && <div className="absolute top-[40px] right-0 flex bg-white p-3 border-2 flex-col gap-2 text-gray-800 ">
              {sort === 'sales' ? <span onClick={() => reSort('createdAt')} className="cursor-pointer">Newest</span>
                : <span onClick={() => reSort('sales')} className="cursor-pointer">Best Selling</span>}
            </div>}

          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          {isLoading
            ? "Loading"
            : error
              ? "Something went wrong"
              : data.map(gig => (
                <GigCard key={gig._id} item={gig} />
              ))}
        </div>
      </div>
    </div>
  )
}


