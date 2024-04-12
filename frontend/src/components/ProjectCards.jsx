import {Link} from 'react-router-dom';

export default function ProjectCards({item}) {
  return (
    <Link to={'/'} > 
      <div className="w-[300px] h-[300px] cursor-pointer shadow-2xl  rounded-lg overflow-hidden">
        <img src={item.img} alt="" className='w-full h-4/6'/>
        <div className='flex items-center gap-3 p-3'>
            <img src={item.pp} alt="" className='w-[50px] h-[50px] rounded-full' />
            <div>
                <h2 className='text-lg'>{item.cat}</h2>
                <span className='text-lg'>{item.username}</span>
            </div>
        </div>
      </div>
    </Link>
  )
}
