import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
