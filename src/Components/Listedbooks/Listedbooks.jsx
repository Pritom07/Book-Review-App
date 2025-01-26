import { useLoaderData } from "react-router-dom";
import Alllist from "../Alllist/Alllist";

const Listedbooks = () => {
  const bookdata = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-slate-100 p-4 rounded-xl mt-2">
        <h1 className="font-extrabold text-4xl text-center">Books</h1>
      </div>
      <Alllist bookdata={bookdata}></Alllist>
    </div>
  );
};

export default Listedbooks;
