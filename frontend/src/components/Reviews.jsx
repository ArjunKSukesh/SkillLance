import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SingleReview from "./SingleReview";
import newRequest from "../utils/newRequest.js";
import { useState } from "react";

export default function Reviews({ gigId }) {

  const [starCount, setStarCount] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () =>
      newRequest.get(`/review/${gigId}`)
        .then(res => {
          return res.data
        })
  });

  const mutation = useMutation({
    mutationFn : (review) => {
      return newRequest.post('/review',review);
    },
    onSuccess : () => {
      queryClient.invalidateQueries(["reviews"])
    }

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = reviewText;
    const star = starCount;
    mutation.mutate({gigId,desc,star})
    setReviewText('');
    setStarCount(0);
  }

  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-lg'>Reviews</h2>
      {isLoading
        ? "loading"
        : error
          ? "Something went wrong!"
          : data.map((review) => <SingleReview key={review._id} review={review} />)
      }

      
      <hr/>
      <div>
        <h1 className="text-xl font-semibold text-center underline">Add Your Review</h1>
        <form action="" onSubmit={handleSubmit} className="mt-1 p-2 ">
          <div className="flex flex-col gap-2">
            <div className=" flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => {
              return <span className={`${ i+1 <= starCount ? "text-yellow-400 text-4xl cursor-pointer " :"text-gray-400 text-4xl cursor-pointer"}`} key={i}
              onClick={() =>setStarCount(i+1)}
              >&#9733;</span>
            })}              
            </div>
          <input type="text" placeholder="write your review here..."  className="w-full border rounded border-gray-500  p-2 focus:outline-none"
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
          />
          
          <button className="bg-green-600 p-2 w-full uppercase rounded  text-white" type="submit" >send</button>
          </div>

            
        </form>
      </div>
    </div>
  )
}
