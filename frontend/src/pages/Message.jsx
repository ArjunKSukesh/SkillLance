import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import newRequest from '../utils/newRequest.js';

export default function Message() {

  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages',id],
    queryFn: () =>
      newRequest.get(`/message/${id}`)
        .then(res => res.data)
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post('/message', message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages",id])
    }
  });

  const hanleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value
    });
    e.target[0].value = "";
  }

  return (
   <div className='w-full   items-center p-3 '>
    <div className='ml-10'>
    <span className='uppercase'>
    <Link to={'/messages'} >Messages</Link> {'>'} John Doe {'>'}
    </span>
    </div>
    <div className='w-full  flex flex-col justify-center items-center mt-2 p-2 gap-3 '>

    <div className='w-[1000px] h-[430px]  border-2 border-gray-200 bg-gray-100 rounded-lg shadow-lg flex flex-col  justify-end'>  
    {isLoading ? ('loading') : (error) ? 'error' : (
    <div className='flex-1 overflow-y-scroll p-3 '>    
    
    <div className='  flex flex-col gap-3  p-3'>
    {data.map((m) => (

    <p key={m._id} 
    className={`${m.userId === currentUser._id ? 'ml-auto bg-green-200  rounded-tl-2xl' : 'mr-auto bg-white rounded-tr-2xl'} rounded-b-2xl  text-black max-w-[500px]  p-3  text-[15px] font-medium  `}>
            {m.desc}
    </p>
    ))}
 </div>
    </div>
    ) }
    </div>
    <form onSubmit={hanleSubmit} className='flex gap-3'>
      <input 
      type="text" 
      placeholder='Enter your message here...'
      className='w-[900px] border-2 shadow-lg border-gray-200 rounded outline-none p-3'/>
      <button type='submit' className='uppercase text-white rounded  bg-green-700 font-semibold p-3 w-20'>send</button>
    </form>
    </div>
    
   </div>
  )
}
