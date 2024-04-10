
export default function Featured() {
    return (
      <div className="w-full flex bg-green-800 justify-center items-center text-white ">
        <div className="flex  justify-center gap-5 items-center  ">
          <div className="flex flex-col flex-wrap p-5  justify-center items-center gap-5 ">
            <div className="flex flex-wrap w-4/6 ">
              <h1 className="font-bold text-4xl">Find the perfect <span className="italic">freelance</span> services for your Business</h1>
            </div>
              <div className=" mt-2 flex justify-center p-3 items-center w-9/12 rounded-lg overflow-hidden">
                  <div className=" flex  justify-center w-5/6 ">
                      <img src="/search.png" alt="search" className="bg-white p-3 rounded-l-lg "/>
                      <input type="text" placeholder="Try building mobile app..." className="w-full  p-3 text-black outline-none" />
                  </div>
                  <button className="bg-green-600 p-3.5 rounded-r-lg font-semibold text-xl">Search</button>
              </div>
              <div className="flex gap-3 items-center font-semibold">
                  <span className=" text-xl">Popular: </span>
                  <button className="  p-2 border-2 rounded-3xl">Web Design</button>
                  <button className="  p-2 border-2 rounded-3xl">Wordpress</button>
                  <button className="  p-2 border-2 rounded-3xl">Logo design</button>
                  <button className="  p-2 border-2 rounded-3xl">AI Services</button>
              </div>
          </div>
          <div>
              <img src="/man.png" alt="man" />
          </div>
        </div>
      </div>
    )
  }
  