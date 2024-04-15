import { Link } from 'react-router-dom';

export default function Message() {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-11/12 flex flex-col  justify-center  p-1 ">
        <span className='uppercase my-4 mx-4'>
          <Link to={'/messages'}>Messages</Link> {'>'} John Doe {'>'}
        </span>
        <div className='w-full  flex  flex-col justify-center items-center'>
        <div className="w-[1000px] flex flex-col mx-[10px] my-2.5 p-5 gap-5 h-[390px] overflow-y-scroll border-2  border-gray-300 rounded-lg ">
          {/* left  */}
          <div className="flex gap-2 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className='w-10 h-10 rounded-full '
            />
            <p className='bg-gray-200 text-black max-w-[500px]  p-3 rounded-b-2xl  rounded-tr-2xl text-[15px] font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* right  */}
          <div className="flex   justify-end gap-2">
            
            <p className='bg-blue-600 text-white max-w-[500px] p-3 rounded-b-2xl  rounded-tl-2xl text-[15px] font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
              Lorem
            </p>
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className='w-10 h-10 rounded-full '
            />
          </div>
          {/* left  */}
          <div className="flex  gap-2 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className='w-10 h-10 rounded-full'
            />
            <p className='bg-gray-200 text-black max-w-[500px]  p-3 rounded-b-2xl  rounded-tr-2xl text-[15px] font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          {/* right  */}
          <div className="flex  justify-end gap-2 ">
            
            <p className='bg-blue-600 text-white max-w-[500px] p-3 rounded-b-2xl  rounded-tl-2xl text-[15px] font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className='w-10 h-10 rounded-full'
            />
          </div>

        </div>
        <hr />
        <div className='w-full flex items-center justify-center gap-3 mt-4 '>
          <textarea name="" id="" cols="30" rows="10" className='w-[870px] p-2 h-14 rounded-lg focus:outline-none border-2 border-gray-300' placeholder='Enter your message here...'></textarea>
          <button className='bg-green-600 uppercase text-white font-semibold rounded h-14 w-28'>send</button>
        </div>
        </div>
      </div>

    </div>
  )
}
