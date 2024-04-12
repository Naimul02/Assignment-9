import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    }).then(() => {
      toast.success("Profile update succeeded");
      window.location.reload();
    });
  };
  return (
    <div className="my-10">
      <Helmet>
        <title>EstateHospitalityHub | UpdateProfile</title>
      </Helmet>
      <div className="hero-content">
        <div className="card shrink-0 shadow-2xl bg-base-100  w-2/3 mx-auto">
          <form className="card-body" onSubmit={handleSubmit}>
            <div>
              <img
                src={user?.photoURL}
                alt=""
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                className="input input-bordered"
                name="email"
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                defaultValue={user?.photoURL}
                className="input input-bordered"
                name="photoURL"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Save</button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
