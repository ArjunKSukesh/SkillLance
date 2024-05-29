import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import newRequest from '../utils/newRequest.js';
import moment from 'moment';

export default function Messages() {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: () =>
      newRequest.get('/conversation')
        .then(res => res.data)
  });

  

  const mutation = useMutation({
    mutationFn : (id) => {
      return newRequest.put(`/conversation/${id}`);
    },
    onSuccess : () => {
      queryClient.invalidateQueries(["conversations"])
    }

  });

  const hanleRead = (id) => {
    mutation.mutate(id);
  }



  return (
    <div className='w-full flex justify-center '>
      {isLoading
        ? ('loading')
        : (error)
          ? ('error')
          : (<div className='w-[1430px] flex flex-col gap-2 p-2'>
            <div className='flex items-center justify-between mt-2'>
              <h1 className='text-xl font-bold'>Messages</h1>

            </div>
            <table className='border-separate' >
              <tbody>

              <tr className='h-[50px] '>
                <th className='text-left pl-4'>Buyer</th>
                <th className='text-left pl-4'>Last Message</th>
                <th className='text-left pl-4'>Date</th>
                <th className='text-left pl-4'>Action</th>
              </tr>

              {data?.map(c => (
                <tr className= {`${((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer)) ? 'bg-green-100 h-[100px]':'bg-white h-[100px]'}`} key={c.id}>
                  <td className='pl-6'>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                  <td className='pl-4'><Link to={`/message/${c.id}`}>{c?.lastMessage?.substring(0, 100)}...</Link></td>
                  <td className='pl-6'>{moment(c.updatedAt).fromNow()}</td>
                  <td className='pl-5'>
                    {((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer ))&& (
                    <button onClick={() => hanleRead(c.id)} className='bg-green-500 text-white font-semibold p-2 rounded'>Mark as Read</button>
                    )}
                  </td>
                </tr>
              ))}
              </tbody>
              
            </table>
          </div>)}
    </div>
  )
}

