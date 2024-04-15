import {Link} from 'react-router-dom';

export default function MyGigs() {
  return (
    <div className='w-full flex justify-center '>
      <div className='w-[1430px] flex flex-col gap-2 p-2'>
        <div className='flex items-center justify-between mt-2'>
          <h1 className='text-xl font-bold'>Gigs</h1>
          <Link to={'/add'}>
            <button className='bg-green-500 p-1 rounded items-center text-white font-semibold'>Add new Gig</button>
          </Link>
        </div>
        <table >
          <tr className='h-[50px] '>
            <th className='text-left pl-4'>Image</th>
            <th className='text-left pl-4'>Title</th>
            <th className='text-left pl-4'>Price</th>
            <th className='text-left pl-4'>Sales</th>
            <th className='text-left pl-4'>Action</th>
          </tr>
          <tr className='h-[50px] bg-green-100'>
            <td className='pl-6'>
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" 
              className='w-9 h-7 object-cover '
              />
            </td>
            <td className='pl-4'>Gig 1</td>
            <td className='pl-6'>88</td>
            <td className='pl-5'>123</td>
            <td className='pl-7'>
              <img src="/delete.png" alt=""  className='w-5 h-5 cursor-pointer'/>
            </td>
          </tr>
          <tr className='h-[50px]'>
            <td className='pl-6'>
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" 
              className='w-9 h-7 object-cover'
              />
            </td>
            <td className='pl-4'>Gig 1</td>
            <td className='pl-6'>88</td>
            <td className='pl-5'>123</td>
            <td className='pl-7'>
              <img src="/delete.png" alt=""  className='w-5 h-5 cursor-pointer'/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
