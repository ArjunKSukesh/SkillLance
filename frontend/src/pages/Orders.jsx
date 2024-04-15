import {Link} from 'react-router-dom';

export default function Orders() {

  const currentUser = {
    id : 1,
    username : 'Arjun K ',
    isSeller : true
}



  return (
    <div className='w-full flex justify-center '>
      <div className='w-[1430px] flex flex-col gap-2 p-2'>
        <div className='flex items-center justify-between mt-2'>
          <h1 className='text-xl font-bold'>Orders</h1>
          
        </div>
        <table >
          <tr className='h-[50px] '>
            <th className='text-left pl-4'>Image</th>
            <th className='text-left pl-4'>Title</th>
            <th className='text-left pl-4'>Price</th>
            <th className='text-left pl-4'>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th className='text-left pl-4'>Contact</th>
          </tr>
          <tr className='h-[50px] bg-blue-100'>
            <td className='pl-6'>
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" 
              className='w-9 h-7 object-cover '
              />
            </td>
            <td className='pl-4'>Maria Andres</td>
            <td className='pl-6'>11</td>
            <td className='pl-5'>John Doe</td>
            <td className='pl-7'>
              <img src="/message.png" alt=""  className='w-6 h-6 cursor-pointer'/>
            </td>
          </tr>
          <tr className='h-[50px]'>
            <td className='pl-6'>
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" 
              className='w-9 h-7 object-cover'
              />
            </td>
            <td className='pl-4'>Francisco Chang</td>
            <td className='pl-6'>11</td>
            <td className='pl-5'>John Doe</td>
            <td className='pl-7'>
              <img src="/message.png" alt=""  className='w-6 h-6 cursor-pointer'/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
