import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../utils/newRequest.js';



export default function GigCard({ item }) {

  const { isLoading, error, data } = useQuery({
    queryKey: [`${item.userId}`],
    queryFn: () =>
      newRequest.get(`/user/${item.userId}`)
        .then(res => {
          return res.data;
        })
  });


  return (
    <Link to={`/gig/${item._id}`}>
      <div className='w-[324px] h-[400px]  mb-10  overflow-hidden rounded-lg border-2 '>
        <img src={item.cover} alt="" className='w-full h-2/4 object-cover' />
        <div className='py-2.5 px-5 gap-2.5 flex flex-col'>
          {isLoading
            ? ("loading")
            : (error)
              ? ("Something went wrong")
              : (<div className='flex  items-center gap-2.5'>
                <img src={data.img || '/noavatar.png'} alt="" className='w-6 h-6 rounded-full object-cover' />
                <span>{data.username}</span>
              </div>)
          }

          <p>{item.desc}</p>
          <div className='flex items-center gap-[5px]'>
            <img src="/star.png" alt="" className='w-3.5 h-3.5' />
            <span className='text-yellow-500 text-sm font-bold'>
              {!isNaN(item.totalStars/item.starNumber) && 
                Math.round(item.totalStars/item.starNumber)
              }
            </span>
          </div>
        </div>
        <hr className='border-1' />
        <div className='py-2.5 px-5 flex items-center justify-between'>
          <img src="/heart.png" alt="" className='cursor-pointer w-4 h-4 object-cover' />
          <div>
            <span className='text-gray-700 text-xs'>STARTING AT</span>
            <h2 className='text-gray-800 font-normal text-[18px] text-end'>
              ₹{item.price}

            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}


