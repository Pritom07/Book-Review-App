import { useLoaderData, useParams } from "react-router-dom";

const Bookdetails = () => {
  const bookdata = useLoaderData();
  const { bookIdx } = useParams();
  const desiredbookobj = bookdata.find((book) => book.bookId === bookIdx);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = desiredbookobj;
  return (
    <div className="max-w-7xl mx-auto mt-3">
      <div className="card grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 border-2 border-slate-200 shadow-xl mx-2">
        <div className="w-full">
          <figure>
            <img
              src={image}
              alt="Bookimage"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[570px] rounded-2xl object-cover"
            />
          </figure>
        </div>
        <div className="w-full text-justify md:ml-1">
          <h2 className="card-title font-bold text-3xl sm:text-4xl lg:text-5xl">
            {bookName}
          </h2>
          <p className="font-semibold text-lg sm:text-2xl text-slate-800 mt-2">
            By : {author}
          </p>
          <div className="border-t-2 border-b-2 border-slate-300 mt-3">
            <h1 className="m-2 font-semibold text-2xl sm:text-3xl text-slate-800">
              {category}
            </h1>
          </div>
          <h1 className="mt-4">
            <span className="font-extrabold text-lg sm:text-xl">Review : </span>
            <span className="text-slate-700 font-semibold">{review}</span>
          </h1>
          <div className="flex items-center mt-3 mb-4 flex-wrap">
            <h1 className="font-extrabold text-lg sm:text-xl">Tags : </h1>
            <div className="flex flex-wrap">
              {tags.map((tag, idx) => (
                <div key={idx}>
                  <button className="mx-3 text-[#23BE0A] font-bold">
                    #{tag}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t-2 border-slate-300">
            <p className="text-slate-700 font-semibold mt-4">
              Number of Pages :
              <span className="font-extrabold text-lg sm:text-xl ml-2">
                {totalPages}
              </span>
            </p>
            <p className="text-slate-700 font-semibold">
              Publisher :
              <span className="font-extrabold text-lg sm:text-xl ml-2">
                {publisher}
              </span>
            </p>
            <p className="text-slate-700 font-semibold">
              Year of Publishing :
              <span className="font-extrabold text-lg sm:text-xl ml-2">
                {yearOfPublishing}
              </span>
            </p>
            <p className="text-slate-700 font-semibold">
              Rating :{" "}
              <span className="font-extrabold text-lg sm:text-xl ml-2">
                {rating}
              </span>
            </p>
            <div className="flex mt-4">
              <button className="bg-slate-200 py-2 px-3 rounded-lg font-extrabold">
                Read
              </button>
              <button className="bg-[#50B1C9] text-white py-2 px-3 rounded-lg ml-3 font-extrabold">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
