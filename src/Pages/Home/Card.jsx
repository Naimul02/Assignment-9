import PropTypes from "prop-types";
const Card = ({ card }) => {
  const { estate_title, description, price, status_area, image } = card;
  return (
    <div className="card  border-2 rounded-xl p-3">
      <figure>
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="space-y-2 mt-2">
        <h2 className="card-title">{estate_title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <p className="text-xl font-semibold text-orange-600">Price : {price}</p>
        <p>{status_area}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};
export default Card;
