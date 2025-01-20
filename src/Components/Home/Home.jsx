import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotoList = () => {
    navigate("/listedbooks");
  };
  return (
    <div className="max-w-7xl mx-auto bg-slate-100 py-7 pl-5 rounded-3xl mt-2">
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-semibold">
            Books to Freshen up <br /> your bookshelf
          </h1>
          <button
            type="button"
            className="bg-[#23BE0A] text-white mt-6 px-4 py-3 rounded-lg text-lg font-extrabold hover:scale-95"
            onClick={gotoList}
          >
            View The List
          </button>
        </div>
        <div>
          <img src="images/topbanner.png" className="w-96" />
        </div>
      </section>
    </div>
  );
};

export default Home;
