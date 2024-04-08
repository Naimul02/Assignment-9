import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const DetailsPage = () => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  const parseIntId = parseInt(id);
  useEffect(() => {
    fetch("/hospitalityData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const card = cards.find((card) => card.id === parseIntId);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={card.image} className="max-w-[600px] rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{card.estate_title}</h1>
          <p className="py-6">{card.description}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
