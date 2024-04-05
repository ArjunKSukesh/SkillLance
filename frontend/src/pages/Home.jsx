import Featured from "../components/Featured";
import Slide from "../components/Slide";
import { cards } from "../data";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Featured/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CategoryCard item={card} key={card.id}/>
        ))}
      </Slide>
    </div>
  )
}
