import { useNavigate} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from "../utils/newRequest.js";

export default function Orders() {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  const navigate = useNavigate();

const { isLoading, error, data } = useQuery({
  queryKey: ['orders'],
  queryFn: () =>
    newRequest.get(`/order`)
      .then(res => res.data)
      .catch(error => console.log(error))
});

const handleContact = async (order) => {
  const sellerId = order.sellerId;
  const buyerId = order.buyerId;
  const id = sellerId + buyerId ;
  try {
    const res = await newRequest.get(`/conversation/single/${id}`);
    navigate(`/message/${res.data.id}`);

  } catch (err) {
    if(err.response.status === 404){
      const res = await newRequest.post(`/conversation`,{
        to : currentUser.seller ? buyerId : sellerId
      });
      navigate(`/message/${res.data.id}`);

    }
    
  }
}



  return (
    <div className='w-full flex justify-center '>
      { isLoading ? "loading" : error ? "error" :(
        <div className='w-[1430px] flex flex-col gap-2 p-2'>
        <div className='flex items-center justify-between mt-2'>
          <h1 className='text-xl font-bold'>Orders</h1>
          
        </div>
        <table >
          <thead>
          <tr className='h-[50px] '>
            <th className='text-left pl-4'>Image</th>
            <th className='text-left pl-4'>Title</th>
            <th className='text-left pl-4'>Price</th>
            <th className='text-left pl-4'>Contact</th>
          </tr>
          </thead>
          <tbody>
          { data.map( order => (
            <tr className='h-[50px] bg-blue-100' key={order._id}>
            <td className='pl-6'>
              <img src={order.img} alt="" 
              className='w-9 h-7 object-cover '
              />
            </td>
            <td className='pl-4'>{order.title}</td>
            <td className='pl-6'>{order.price}</td>
            <td className='pl-7'>
              <img src="/message.png" alt=""  className='w-6 h-6 cursor-pointer' onClick={()=>handleContact(order)}/>
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
