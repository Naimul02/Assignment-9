import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center mt-[200px]">
      <h1 className="text-6xl font-bold">{error.status}</h1>
      <h1 className="text-3xl font-bold">{error.statusText}</h1>
      <Link to="/" className="text-blue-600 underline">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
