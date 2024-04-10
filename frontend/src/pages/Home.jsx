import Featured from "../components/Featured";
import Slide from "../components/Slide";
import { cards,projects } from "../data";
import CategoryCard from "../components/CategoryCard";
import ProjectCards from "../components/ProjectCards";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="w-full flex items-center justify-center  bg-fuchsia-950 text-white ">
        <div className="flex w-full h-full justify-evenly   items-center  mt-10 mb-10">
          <div className="flex flex-col  w-5/12 mt-2 mb-2 gap-5  p-3">
            <h1 className="text-3xl font-semibold ">A whole world of freelance talent  at  your  fingertips</h1>

            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold mt-2">
                <img src="/check.png" alt="" className="w-7 h-7 " />
                The best for every budget
              </div>
              <p className="text-lg">
                Find high-quality services at every price point.
                No hourly rates,  just project-based pricing.
              </p>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="flex gap-2 text-lg font-semibold">
                <img src="/check.png" alt="" className="w-7 h-7 " />
                Quality work done quickly
              </div>
              <p className=" text-lg">
                Find the right freelancer to began working on your project
                within minutes.
              </p>
            </div>


            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="flex gap-2 text-lg font-semibold">
                <img src="/check.png" alt="" className="w-7 h-7 " />
                Protected payments, every time.
              </div>
              <p className=" text-lg">
                Always know what you will pay upfront. Your payment is not  released
                until you approve the work.
              </p>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center">  
            <div className="flex gap-2 text-lg font-semibold">
              <img src="/check.png" alt="" className="w-7 h-7 " />
              24/7 support
            </div>
            <p className="text-lg  ">
              Our round-the-clock
              support team is available  to help anytime, anywhere.
            </p>
            </div>


          </div>
          <div className="flex justify-center items-center " >
            <video src="/video.mp4" className="w-[700px] " controls></video>
          </div>
        </div>
      </div>




      <div className="w-full flex mt-4 justify-center items-center  h-[550px] ">
        <div className="flex w-full h-full justify-evenly gap-6 items-center  p-8 m-3">
          <div className="flex flex-col justify-center gap-4  p-4 h-[450px] w-[550px]">
            <h1 className="text-4xl font-extrabold">
              <i>SkillLance</i> business
            </h1>
            <h1 className="text-3xl font-bold">
              A business solution designed for <i>teams.</i>
            </h1>
            <p className="font-semibold text-lg">
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses.
            </p>
            <div className="flex gap-2 text-lg font-semibold">
              <img src="/check.png" alt="" className="w-7 h-7 " />
              Connect to freelancers with proven business experience.
            </div>
            <div className="flex gap-2 text-lg font-semibold">
              <img src="/check.png" alt="" className="w-7 h-7 " />
              Get matched with the perfect talent by a customer success manager.
            </div>
            <div className="flex gap-2 font-semibold text-lg">
              <img src="/check.png" alt="" className="w-7 h-7 " />
              Manage teamwork and boost productivity with one powerful workspace.
            </div>
            <button className="bg-green-700 text-white rounded p-2 font-semibold text-lg" >Explore SkillLance Business</button>
          </div>
          <div className="flex justify-center items-center   h-[430px] w-[600px] " >
            <img
              className="w-full h-full "
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"

              alt="" />
          </div>
        </div>
      </div>

      

      <Slide slidesToShow={4} arrowsScroll={4} >
        {projects.map(project => (
          <ProjectCards item={project} key={project.id} />
        ))}
      </Slide>


    </div>
  )
}
