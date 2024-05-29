import {Link} from 'react-router-dom';
import getCurrentUser from '../utils/getCurrentUser.js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../utils/newRequest.js';

export default function MyGigs() {

  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['myGigs'],
    queryFn: () =>
      newRequest.get(`/gigs/allgigs?userId=${currentUser._id}`)
        .then(res => {
          return res.data
        })
        .catch(err => console.error(err))
  });

  const mutation = useMutation({
    mutationFn : (id) => {
      return newRequest.delete(`/gigs/gig/${id}`);
    },
    onSuccess : () => {
      queryClient.invalidateQueries(["myGigs"])
    }

  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  }

  return (
    <div className='w-full flex justify-center '>
      {isLoading 
      ? ('loading') 
      : error 
      ? ('error') 
      :( <div className='w-[1430px] flex flex-col gap-2 p-2'>
        <div className='flex items-center justify-between mt-2'>
          <h1 className='text-xl font-bold'>Gigs</h1>
          {currentUser.isSeller && (
          <Link to={'/add'}>
            <button className='bg-green-500 p-1 rounded items-center text-white font-semibold'>Add new Gig</button>
          </Link>
          )}
        </div>
        <table >
          <thead>
          <tr className='h-[50px] '>
            <th className='text-left pl-4'>Image</th>
            <th className='text-left pl-4'>Title</th>
            <th className='text-left pl-4'>Price</th>
            <th className='text-left pl-4'>Sales</th>
            <th className='text-left pl-4'>Action</th>
          </tr>
          </thead>
          
          <tbody>
         { data.map((gig) => (
         <tr className='h-[50px]' key={gig._id}>
            <td className='pl-6'>
              <img src={gig.cover} alt="" 
              className='w-9 h-7 object-cover'
              />
            </td>
            <td className='pl-4'>{gig.title}</td>
            <td className='pl-6'>{gig.price}</td>
            <td className='pl-5'>{gig.sales}</td>
            <td className='pl-7'>
              <img src="/delete.png" alt="" onClick={() => handleDelete(gig._id)} className='w-5 h-5 cursor-pointer'/>
            </td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  )
}
