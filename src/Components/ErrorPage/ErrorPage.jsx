import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
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
    </div>
  );
};

export default ErrorPage;
