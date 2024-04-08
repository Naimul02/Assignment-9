import { getAuth, updateProfile } from "firebase/auth";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const auth = getAuth(app);
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    const email = data.email;
    const password = data.password;

    createUser(email, password).then((result) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {})
        .catch((error) => {
          console.error(error);
        });
      console.log(result.user);
    });
  };
  return (
    <div className="flex items-center h-[329px]">
      <div className="md:w-3/4 lg:w-1/2 mx-auto ">
        <h2 className="text-3xl font-semibold text-center mb-3">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            {...register("photoURL")}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            placeholder="Email"
            type="email"
            {...register("email")}
            className="w-full border  px-3 py-2 rounded-lg"
            required
          />
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
            className="w-full border  px-3 py-2 rounded-lg"
            required
          />

          <input type="submit" className="btn btn-primary w-full" />
        </form>
        <p className="my-4 text-center">
          Already have an account ?
          <Link to="/login" className="text-blue-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
