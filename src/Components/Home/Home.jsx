import { useLoaderData, useNavigate } from "react-router-dom";
import Eachbook from "../Eachbook/Eachbook";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const bookdata = useLoaderData();
  const navigate = useNavigate();
  const gotoList = () => {
    navigate("/listedbooks");
  };
  const [spinner, setspinner] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setspinner(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {spinner ? (
        <div className="flex justify-center items-center min-h-screen">
          <Helmet>
            <title>Book-Review-App | Home</title>
          </Helmet>
          <PropagateLoader color="#23BE0A" size={22} />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto mb-8">
          <Helmet>
            <title>Book-Review-App | Home</title>
          </Helmet>
          <div className="bg-slate-100 py-6 px-4 md:px-6 rounded-3xl mt-3 md:mt-2 mx-2">
            <section className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
              <div className="text-center md:text-left md:pr-4 lg:pr-8 xl:pr-12 lg:mt-5">
                <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[56px] font-bold leading-snug sm:leading-relaxed lg:leading-tight xl:leading-tight">
                  Books to Freshen up <br className="hidden sm:block" /> your
                  bookshelf
                </h1>
                <button
                  type="button"
                  className="bg-[#23BE0A] text-white mt-5 px-5 py-3 rounded-lg text-base md:text-lg font-bold hover:scale-95 transition-transform duration-200"
                  onClick={gotoList}
                >
                  View The List
                </button>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src="images/topbanner.png"
                  className="w-60 sm:w-72 md:w-80 lg:w-[26rem] xl:w-[28rem] object-contain"
                  alt="Top Banner"
                />
              </div>
            </section>
          </div>
          <h1 className="font-bold text-[40px] text-center mt-11">Books</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 px-2">
            {bookdata.map((book) => (
              <Eachbook key={book.bookId} book={book}></Eachbook>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
