
export default function Footer() {
  return (
    <div className="w-full flex border-t mt-20">
      <div className="w-full flex flex-col  items-center justify-center p-3 ">
        <div className="w-full flex  justify-between p-12">

          <div className="flex flex-col gap-4 text-gray-600 ">
            <h2 className="font-bold">Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>

          <div className="flex flex-col gap-4 text-gray-600 ">
             <h2 className="font-bold">Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on SkillLance</span>
            <span>Buying on SkillLance</span>
          </div>

          <div className="flex flex-col gap-4 text-gray-600">
          <h2 className="font-bold">About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>

          <div className="flex flex-col gap-4 text-gray-600">
            <h2 className="font-bold">Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>

          <div className="flex flex-col gap-4 text-gray-600">
            <h2 className="font-bold">More From SkillLance</h2>
            <span>SkillLance Business</span>
            <span>SkillLance Pro</span>
            <span>SkillLance Logo Maker</span>
            <span>SkillLance Guides</span>
            <span>Get Inspired</span>
            <span>SkillLance Select</span>
            <span>ClearVoice</span>
            <span>SkillLance Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>

        
        <div className="w-full h-[70px] flex items-center justify-between border-t mt-2">
          <div className="h-full flex justify-center gap-6 items-center ml-4 p-12 ">
            <h2 className="text-2xl font-bold text-gray-500">SkillLance</h2>
            <span className="text-gray-400 text-sm">© SkillLance International Ltd. 2023</span>
          </div>
          <div className="flex w-5/12    justify-center items-center gap-10   mr-10">

            <div className="flex items-center gap-3 ">

              <div className="w-10 h-10 flex justify-center items-center hover:bg-slate-200 rounded-full">
              <img src="/facebook.png" alt="" className="w-[23px]  cursor-pointer"/>
              </div>

              <div className="w-10 h-10 flex justify-center items-center hover:bg-slate-200 rounded-full">
              <img src="/instagram.png" alt="" className="w-[23px] cursor-pointer"/>
              </div>

              <div className="w-10 h-10 flex justify-center items-center hover:bg-slate-200 rounded-full">
              <img src="/linkedin.png" alt="" className="w-[23px] cursor-pointer"/>
              </div>

              <div className="w-10 h-10 flex justify-center items-center hover:bg-slate-200 rounded-full">
              <img src="/pinterest.png" alt="" className="w-[23px] cursor-pointer"/>
              </div>

              <div className="w-10 h-10 flex justify-center items-center hover:bg-slate-200 rounded-full">
              <img src="/twitter.png" alt="" className="w-[23px] cursor-pointer"/>
              </div>

            </div>

            <div className="flex justify-center items-center gap-3
             text-gray-500 w-[100px] h-9 rounded-2xl hover:bg-gray-200 cursor-pointer hover:text-black hover:font-medium">
              <img src="/language.png" alt="" className="w-5"/>
              <span>English</span>
            </div>

            <div className="flex justify-center items-center gap-2 text-gray-500 
             w-16 h-8 rounded-2xl hover:bg-gray-200 cursor-pointer hover:text-black hover:font-medium">
              <span>₹</span>
              <span>INR</span>
            </div>

            <div className=" cursor-pointer rounded-full border border-gray-400 hover:bg-slate-200 w-10 h-10  flex justify-center items-center">
              <img src="/accessibility.png" alt="" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
