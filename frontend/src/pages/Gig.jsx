import { useQuery } from '@tanstack/react-query';
import { Slider } from 'infinite-react-carousel';
import { useParams } from 'react-router-dom';
import newRequest from '../utils/newRequest.js';
import Reviews from '../components/Reviews.jsx';

export default function Gig() {

  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));



  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`)
        .then(res => {
          return res.data
        })
  });

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: [`user`],
    queryFn: () =>
      newRequest.get(`/user/${data.userId}`)
        .then(res => {
          return res.data
        })
  });

  const paymentHandler = async () => {
    try {

      const {data : {key}} = await newRequest.get('http://localhost:3000/api/getkey')

      const { data : {order}   } = await newRequest.post(`/order/create-payment/${id}`);
      

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "SkillLance",
        description: "Payment for Gig",
        image: currentUser.img,
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `http://localhost:3000/api/order/payment-verification/${id}`,
        prefill: {
          name: currentUser.username,
          email: currentUser.email,
          contact: currentUser.phone
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        },
        handler: function (response){

          newRequest.post(`/order/payment-verification/${id}`,{
            razorpay_payment_id : response.razorpay_payment_id,
            razorpay_order_id : response.razorpay_order_id,
            razorpay_signature : response.razorpay_signature
          })
          .then(res => {console.log(res.data)})
          .catch(err => {
            console.error(err);
          });

      },
  
      };

      const razor = new window.Razorpay(options);
      razor.open();



    } catch (error) {
      console.error(error);
    }


  }


  return (
    <div className='w-full flex justify-center '>
      {isLoading ? 'loading' : error ? 'Something went wrong' :
        <div className='w-11/12 flex py-[30px] gap-[50px]  px-5'>

          {/* left */}
          <div className='w-[850px] flex flex-col gap-5'>
            <span className='uppercase'>SkillLance {'>'} Graphics & Design {'>'}</span>
            <h1 className='text-2xl font-bold'>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong"
            ) : (
              <div className='flex items-center gap-2 p-2'>
                <img src={dataUser.img || "novatar.png"} alt=""
                  className='w-10 h-10 object-cover rounded-full'
                />
                <span className='text-lg'>{data.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className='flex items-center justify-center gap-1 '>
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (

                        <span className="text-yellow-400 text-4xl cursor-pointer " key={i}>&#9733;</span>

                      ))}
                    <span className='text-yellow-400 font-semibold text-[28px]'>
                      {Math.round(data.totalStars / data.starNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className='w-full  flex justify-center items-center overflow-hidden'>
              <div className='w-[450px] h-[450px] flex justify-center items-center'>
                <Slider slidesToShow={1} arrowsScroll={1} className='h-full w-full'>

                  {data.images.map((img) => (
                    <img src={img} key={img} />
                  ))}
                </Slider>
              </div>
            </div>
            <h2 className='text-xl'>About this Gig</h2>
            <p>{data.desc} </p>

            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong"
            ) : (

              <div>
                <h2 className='text-xl font-semibold'>About the Seller</h2>
                <div className='flex gap-5 mt-5 mb-5 p-1'>
                  <img
                    src={dataUser.img || "novatar.png"}
                    alt=""
                    className='w-24 h-24 object-cover rounded-full'

                  />
                  <div className='flex flex-col gap-1'>
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className='flex items-center gap-1'>
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (

                            <img src="/star.png" alt="" className='w-4 h-4 object-cover' key={i} />
                          ))}
                        <span className='text-yellow-400 font-semibold'>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button className='border border-black p-1 rounded-lg'>Contact Me</button>
                  </div>
                </div>
                <div className='w-full flex flex-col  border border-gray-400 rounded-lg p-2'>
                  <div className='flex  justify-between'>
                    <div className='flex flex-col w-[300px] gap-2 mb-10 p-1'>
                      <span className='font-light'>From</span>
                      <span>{dataUser.country}</span>
                    </div>
                    <div className='flex flex-col w-[300px] gap-2 mb-10 p-1'>
                      <span className='font-light'>Member since</span>
                      <span>Aug 2022</span>
                    </div>
                    <div className='flex flex-col w-[300px] gap-2 mb-10 p-1'>
                      <span className='font-light'>Avg. response time</span>
                      <span>4 hours</span>
                    </div>
                    <div className='flex flex-col w-[300px] gap-2 mb-10 p-1'>
                      <span className='font-light'>Last Delivery</span>
                      <span>1 day</span>
                    </div>
                    <div className='flex flex-col w-[300px] gap-2.5 mb-10 p-1'>
                      <span className='font-light'>Languages</span>
                      <span>English</span>
                    </div>
                  </div>
                  <hr className='mb-5 border-gray-400' />
                  <p>
                    {dataUser.desc}
                  </p>
                </div>
              </div>)}

            <Reviews gigId={id} />




          </div>

          {/* right  */}
          <div className='sticky  top-40 w-[450px] h-[360px] flex flex-col justify-center gap-5 border border-black p-7 rounded-lg bg-white '>
            <div className='flex justify-between '>
              <h3 className='text-lg font-semibold'>{data.shortTitle}</h3>
              <h2 className='text-lg'>₹ {data.price}</h2>
            </div>
            <p className='text-gray-600'>
              {data.shortDesc}
            </p>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2'>
                <img src="/clock.png" alt=""
                  className='w-4 h-4'
                />
                <span className='font-semibold'>{data.deliveryTime} Days Delivery </span>
              </div>
              <div className='flex items-center gap-2'>
                <img src="/recycle.png" alt="" className='w-4 h-4'
                />
                <span className='font-semibold'>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className='flex flex-col'>

              {data.features.map((feature) => (
                <div className='flex items-center gap-2' key={feature}>
                  <img src="/greencheck.png" alt="" className='w-6 h-6' />
                  <span className='text-gray-600'>{feature}</span>
                </div>
              ))}

            </div>
            <button onClick={paymentHandler} className='bg-green-600 w-full p-1 rounded-lg text-white text-lg font-semibold border-2 border-gray-400'>Continue</button>
          </div>
        </div>
      }
    </div>
  )
}
