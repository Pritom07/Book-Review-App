import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const goprevious = () => {
    navigate(-1);
  };
  return (
    <div className="text-center">
      <img src="images/notfound2.png" className="m-auto" />
      <p className="text-5xl font-bold text-red-700">Oops!</p>
      <h1 className="text-2xl font-medium">
        Sorry, an unexpected error has occured.
      </h1>
      <p className="text-2xl font-medium text-red-700">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={goprevious}
        className="bg-[#23BE0A] text-white text-lg font-bold px-5 py-2 rounded-xl hover:text-[#23BE0A] hover:bg-slate-100 border-2 hover:border-slate-300 mt-1"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
