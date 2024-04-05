import { Link } from "react-router-dom";

export default function CategoryCard({item}) {
  return (
    <Link to={'/gigs?cat=design'}>
        <div className="w-[252px] h-[344px] text-white  cursor-pointer">
            <img src={item.img} alt="img" className=" h-full w-full object-cover" />
            <span className="absolute top-[15px] font-semibold left-[15px]">{item.desc}</span>
            <span className="absolute top-[40px] font-semibold left-[15px] text-2xl">{item.title}</span>
        </div>
    </Link>
  )
}
