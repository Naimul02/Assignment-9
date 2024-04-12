import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  // const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User login successful");
      })
      .catch((error) => {
        console.error(error.message);
        // setError(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login with Google successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Login with Github successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex items-center h-[329px]">
      <Helmet>
          <title>HospitalityHub | Login</title>
      </Helmet>
      <div className="md:w-3/4 lg:w-1/2 mx-auto ">
        <h2 className="text-3xl font-semibold text-center mb-3">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <input
            type="email"
            placeholder="email"
            {...register("email")}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            placeholder="password"
            type="password"
            {...register("password")}
            className="w-full border  px-3 py-2 rounded-lg"
            required
          />
          <button className="btn btn-primary w-full">Submit</button>

          <div className="w-full flex  items-center">
            <span className="w-[48%] flex items-center gap-2">
              <button
                className="w-full btn bg-amber-800 text-white hover:text-black"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle className="text-3xl" />
                SignIn With Google
              </button>
            </span>
            <span className="w-[48%] flex items-center gap-2  ml-[4%]">
              <button
                className="btn  bg-amber-800 text-white hover:text-black w-full"
                onClick={handleGithubSignIn}
              >
                <FaGithub className="text-3xl"></FaGithub>
                SignIn With Github
              </button>
            </span>
          </div>
        </form>
        <ToastContainer />
        <p className="mt-2 text-center">
          Are you new here ?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
