import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest.js";

export default function SingleReview({ review }) {
    const { isLoading, error, data } = useQuery({
        queryKey: [review.userId],
        queryFn: () =>
            newRequest.get(`/user/${review.userId}`)
                .then(res => {
                    return res.data
                })
    });


    
    return (
        <div className='flex flex-col gap-2 p-1 my-4'>

            { isLoading ? ("loading") : (error) ? ("error") :
                (<div className='flex items-center gap-4'>
                    <img src={data.img }
                        className='w-10 h-10 rounded-full object-cover'
                    />
                    <div>
                        <span className='text-base font-semibold'>{data.username}</span>
                        <div className='flex items-center gap-2'>
                            {/* <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt=""
                                className='w-5 h-5'
                            /> */}
                            <span className='text-sm text-gray-500'>{data.country}</span>
                        </div>
                    </div>
                </div>)
            }

            <div className='flex items-center gap-1'>
                {Array(review.star)
                    .fill()
                    .map((item, i) => (
                        <img src="/star.png" alt="" className='w-4 h-4' key={i} />
                    ))}

                <span className='text-yellow-500 font-semibold'>{review.star}</span>
            </div>
            <p>{review.desc}</p>
            <div className='flex items-center gap-3 font-semibold'>
                <span>Helpful?</span>
                <img src="/like.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>Yes</span>
                <img src="/dislike.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>No</span>
            </div>
            
        </div>
    )
}
