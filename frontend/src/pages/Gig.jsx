import { Slider } from 'infinite-react-carousel';

export default function Gig() {
  return (
    <div className='w-full flex justify-center '>
      <div className='w-11/12 flex py-[30px] gap-[50px]  px-5'>

        {/* left */}
        <div className='w-[850px] flex flex-col gap-5'>
          <span className='uppercase'>SkillLance {'>'} Graphics & Design {'>'}</span>
          <h1 className='text-2xl font-bold'>I will create ai generated art for you</h1>
          <div className='flex items-center gap-2 p-2'>
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
              className='w-10 h-10 object-cover rounded-full'
            />
            <span className='text-lg'>Anna Bell</span>
            <div className='flex items-center gap-1'>
              <img src="/star.png" alt="" className='w-4 h-4' />
              <img src="/star.png" alt="" className='w-4 h-4' />
              <img src="/star.png" alt="" className='w-4 h-4' />
              <img src="/star.png" alt="" className='w-4 h-4' />
              <img src="/star.png" alt="" className='w-4 h-4' />
              <span className='text-yellow-600 font-semibold'>5</span>
            </div>
          </div>
          <div className='w-full  flex justify-center items-center overflow-hidden'>
            <div className='w-[450px] h-[450px] flex justify-center items-center'>
              <Slider slidesToShow={1} arrowsScroll={1} className='h-full w-full'>
                <img className='w-[450px] h-[450px] object-cover'
                  src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <img className='w-[450px] h-[450px] object-cover'
                  src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <img className='w-[450px] h-[450px] object-cover'
                  src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </Slider>
            </div>
          </div>
          <h2 className='text-xl'>About this Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div>
            <h2 className='text-xl font-semibold'>About the Seller</h2>
            <div className='flex gap-5 mt-5 mb-5 p-1'>
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className='w-24 h-24 object-cover rounded-full'

              />
              <div className='flex flex-col gap-1'>
                <span>Anna Bell</span>
                <div className='flex items-center gap-1'>
                  <img src="/star.png" alt="" className='w-4 h-4' />
                  <img src="/star.png" alt="" className='w-4 h-4' />
                  <img src="/star.png" alt="" className='w-4 h-4' />
                  <img src="/star.png" alt="" className='w-4 h-4' />
                  <img src="/star.png" alt="" className='w-4 h-4' />
                  <span className='text-yellow-600 font-semibold'>5</span>
                </div>
                <button className='border border-black p-1 rounded-lg'>Contact Me</button>
              </div>
            </div>
            <div className='w-full flex flex-col  border border-gray-400 rounded-lg p-2'>
              <div className='flex  justify-between'>
                <div className='flex flex-col w-[300px] gap-2 mb-10 p-1'>
                  <span className='font-light'>From</span>
                  <span>USA</span>
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
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-lg'>Reviews</h2>


            <div className='flex flex-col gap-2 p-1 my-4'>

              <div className='flex items-center gap-4'>
                <img src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
                  className='w-10 h-10 rounded-full object-cover'
                />
                <div>
                  <span className='text-base font-semibold'>Garner David</span>
                  <div className='flex items-center gap-2'>
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt=""
                      className='w-5 h-5'
                    />
                    <span className='text-sm text-gray-500'>United States</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <span className='text-yellow-500 font-semibold'>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className='flex items-center gap-3 font-semibold'>
                <span>Helpful?</span>
                <img src="/like.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>Yes</span>
                <img src="/dislike.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>No</span>
              </div>
            </div>
            <hr />


            <div className='flex flex-col gap-2 p-1 my-4'>

              <div className='flex items-center gap-4'>
                <img src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
                  className='w-10 h-10 rounded-full object-cover'
                />
                <div>
                  <span className='text-base font-semibold'>Sidney Owen</span>
                  <div className='flex items-center gap-2'>
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                      className='w-5 h-5'
                    />
                    <span className='text-sm text-gray-500'>Germany</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <span className='text-yellow-500 font-semibold'>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className='flex items-center gap-3 font-semibold'>
                <span>Helpful?</span>
                <img src="/like.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>Yes</span>
                <img src="/dislike.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className='flex flex-col gap-2 p-1 my-4'>

              <div className='flex items-center gap-4'>
                <img src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""
                  className='w-10 h-10 rounded-full object-cover'
                />
                <div>
                  <span className='text-base font-semibold'>Lyle Giles</span>
                  <div className='flex items-center gap-2'>
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt=""
                      className='w-5 h-5'
                    />
                    <span className='text-sm text-gray-500'>United States</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <img src="/star.png" alt="" className='w-4 h-4' />
                <span className='text-yellow-500 font-semibold'>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className='flex items-center gap-3 font-semibold'>
                <span>Helpful?</span>
                <img src="/like.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>Yes</span>
                <img src="/dislike.png" alt="" className='w-4 h-4 cursor-pointer' />
                <span>No</span>
              </div>
            </div>
            <hr />



          </div>

        </div>

        {/* right  */}
        <div className='sticky  top-40 w-[450px] h-[360px] flex flex-col justify-center gap-5 border border-black p-7 rounded-lg bg-white '>
          <div className='flex justify-between '>
            <h3 className='text-lg font-semibold'>1 AI generated image</h3>
            <h2 className='text-lg'>₹ 5000</h2>
          </div>
          <p className='text-gray-600'>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <img src="/clock.png" alt="" 
              className='w-4 h-4'
              />
              <span className='font-semibold'>2 Days Delivery</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/recycle.png" alt=""  className='w-4 h-4'
              />
              <span className='font-semibold'>3 Revisions</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <img src="/greencheck.png" alt="" className='w-6 h-6'/>
              <span className='text-gray-600'>Prompt writing</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/greencheck.png" alt="" className='w-6 h-6'/>
              <span className='text-gray-600'>Artwork delivery</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/greencheck.png" alt="" className='w-6 h-6'/>
              <span className='text-gray-600'>Image upscaling</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/greencheck.png" alt=""  className='w-6 h-6'/>
              <span className='text-gray-600'>Additional design</span>
            </div>
          </div>
          <button className='bg-green-600 p-1 rounded-lg text-white text-lg font-semibold border-2 border-gray-400'>Continue</button>
        </div>
      </div>

    </div>
  )
}
