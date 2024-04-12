import {Link} from 'react-router-dom';

export default function GigCard({item}) {
  return (
    <Link to={'/gig/123'}>
      <div className='w-[324px] h-[470px]  mb-10  overflow-hidden rounded-lg border-2 '>
        <img src={item.img} alt=""  className='w-full h-2/4 object-cover'/>
        <div className='py-2.5 px-5 gap-2.5 flex flex-col'>
            <div className='flex  items-center gap-2.5'>
                <img src={item.pp} alt="" className='w-6 h-6 rounded-full object-cover'/>
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className='flex items-center gap-[5px]'>
                <img src="/star.png" alt=""  className='w-3.5 h-3.5'/>
                <span className='text-yellow-500 text-sm font-bold'>{item.star}</span>
            </div>
        </div>
        <hr className='border-1'/>
        <div className='py-2.5 px-5 flex items-center justify-between'>
            <img src="/heart.png" alt=""  className='cursor-pointer w-4 h-4 object-cover'/>
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
