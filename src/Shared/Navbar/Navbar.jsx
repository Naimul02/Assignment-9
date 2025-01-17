import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/userProfile">User Profile</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          HospitalityHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}

        {/* PROFILE */}

        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div className="w-12 h-12 rounded-full relative content-container">
            <img
              alt="user"
              className="border rounded-full w-full h-full ml-1"
              src={user && user.photoURL}
            />
            {user && (
              <div className="absolute content  rounded-xl bg-slate-200 z-10 -left-24 px-4 w-[150px] py-2">
                <h1 className="text-lg font-semibold">{user.displayName}</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
