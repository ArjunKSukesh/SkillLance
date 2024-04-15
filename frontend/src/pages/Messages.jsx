import { Link } from 'react-router-dom';

export default function Messages() {

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat`
  return (
    <div className='w-full flex justify-center '>
      <div className='w-[1430px] flex flex-col gap-2 p-2'>
        <div className='flex items-center justify-between mt-2'>
          <h1 className='text-xl font-bold'>Messages</h1>

        </div>
        <table className=''>
          <tr className='h-[50px] '>
            <th className='text-left pl-4'>Buyer</th>
            <th className='text-left pl-4'>Last Message</th>
            <th className='text-left pl-4'>Date</th>
            <th className='text-left pl-4'>Action</th>
          </tr>
          <tr className='h-[100px] bg-green-100'>
            <td className='pl-6'>John Doe</td>
            <td className='pl-4'><Link to={'/message/123'}>{message.substring(0, 100)}...</Link></td>
            <td className='pl-6'>1 hour ago</td>
            <td className='pl-5'>
              <button className='bg-green-500 text-white font-semibold p-1 rounded'>Mark as Read</button>
            </td>

          </tr>
          <tr className='h-[100px] bg-green-100'>
            <td className='pl-6'>John Doe </td>
            <td className='pl-4 '><Link to={'/message/123'}>{message.substring(0, 100)}...</Link></td>
            <td className='pl-6'>1 hour ago</td>
            <td className='pl-5'>
              <button className='bg-green-500 text-white font-semibold p-1 rounded'>Mark as Read</button>
            </td>

          </tr>
        </table>
      </div>
    </div>
  )
}

