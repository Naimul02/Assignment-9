import { getAuth, updateProfile } from "firebase/auth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const auth = getAuth(app);
const Register = () => {
  const { createUser, setReload } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const [passwordChecked, setPasswordChecked] = useState(false);

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    const email = data.email;
    const password = data.password;

    if (password.length < 6) {
      return toast.error("Password must be at least 6 Character or longer");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must be at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      return toast.error("Password must be at least one lowercase letter");
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setReload(true);
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(result.user);
        toast.success("User created Successful!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex items-center h-[329px]">
      <Helmet>
        <title>HospitalityHub | Register</title>
      </Helmet>
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
          <div className="flex items-center relative">
            <input
              placeholder="Password"
              type={passwordChecked ? `text` : `password`}
              {...register("password")}
              className="w-full border  px-3 py-2 rounded-lg"
              required
            />

            <span
              className="absolute right-4"
              onClick={() => {
                setPasswordChecked(!passwordChecked);
              }}
            >
              {passwordChecked ? (
                <IoIosEyeOff className="text-2xl"></IoIosEyeOff>
              ) : (
                <IoIosEye className="text-2xl"></IoIosEye>
              )}
            </span>
          </div>

          <input type="submit" className="btn btn-primary w-full" />
        </form>
        <p className="my-4 text-center">
          Already have an account ?
          <Link to="/login" className="text-blue-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
