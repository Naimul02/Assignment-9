import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="my-[200px]">
        <span className="loading loading-spinner loading-lg mx-auto block "></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
