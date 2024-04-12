import { Slider } from 'infinite-react-carousel';
// import { cards } from '../data';
// import CategoryCard from './CategoryCard';


export default function Slide({children,slidesToShow, arrowsScroll}) {
 
  

  return (
    <div className=' py-7 flex justify-center  w-full my-4 overflow-hidden'>
      <div className='w-[1400px] '>
        {/* <Slider slidesToShow={5} arrowsScroll={5}> */}
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} >
        {/* {cards.map(card => (
          <CategoryCard item={card} key={card.id}/>
        ))} */}
        {children}
        </Slider>
      </div>
    </div>
  )
}
