import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
const DetailsPage = () => {
  const cards = useLoaderData();

  const { id } = useParams();
  const parseIntId = parseInt(id);

  const card = cards.find((card) => card.id === parseIntId);
  console.log(card);

  return (
    <div>
      <Helmet>
          <title>EstateHospitalityHub | Detail</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Detail Page</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={card.image}
            className="max-w-[600px] rounded-lg shadow-2xl lg:h-[480px]"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{card.estate_title}</h1>
            <p className="mt-10">{card.description}</p>
            <h3 className="text-xl font-bold">
              Segment Name : {card.segment_name}
            </h3>
            <ul>
              <h2 className="text-3xl font-semibold">Facilities : </h2>
              {card?.facilities?.map((facility) => {
                return (
                  <>
                    <li className="text-lg font-semibold ml-3"> {facility}</li>
                  </>
                );
              })}
            </ul>
            <div className="flex">
              <p className="text-xl font-semibold">Price : {card.price}</p>
              <p className="text-xl font-semibold ml-3">Area : {card.area}</p>
            </div>
            <p className="text-xl font-semibold">Status : {card.status}</p>
            <h2 className="text-xl font-semibold">
              Location : {card.location}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
