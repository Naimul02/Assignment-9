import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { estate_title, description, price, status_area, image, id } = card;
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
        <div className="card-actions">
          <Link to={`/details/${id}`}>
            <button className="btn bg-teal-950 text-white hover:bg-slate-900 rounded-xl w-full px-12  mt-3">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};
export default Card;
