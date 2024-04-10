import { useEffect, useState } from "react";
import Card from "./Card";
import "animate.css";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/hospitalityData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="my-20">
      <div>
        <h1 className="animate__animated animate__fadeInLeft text-4xl font-bold text-center">
          Hospitality
        </h1>

        <p className="lg:w-[700px] lg:mx-auto text-center mt-2 mb-6 animate__animated animate__fadeInLeft">
          Hospitality means extending a welcome to guests or offering a home
          away from home, and the word is derived from the Latin word “hospes”
          meaning host, visitor or stranger.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate__animated animate__fadeInLeft">
        {cards?.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
