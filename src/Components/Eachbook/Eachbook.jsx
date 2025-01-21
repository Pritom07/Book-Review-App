import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Eachbook = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;
  const navigate = useNavigate();
  const seedetail = () => {
    navigate(`/Eachbook/${bookId}`);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="card bg-base-100 shadow-xl px-1 border-2 border-slate-100 cursor-pointer"
        onClick={seedetail}
      >
        <figure>
          <img src={image} className="w-full h-80 p-4 rounded-3xl" />
        </figure>
        <div className="card-body">
          <div className="grid grid-cols-3 gap-2">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="text-[#23BE0A] bg-slate-100 font-semibold text-[12.5px] md:text-[15.7px] rounded-xl text-center px-2 py-1 text-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="divide-y-2 divide-dashed">
            <div className="mb-4">
              <p className="text-3xl font-bold mt-1">{bookName}</p>
              <p className="text-xl font-bold text-slate-700 mt-1">
                By : {author}
              </p>
            </div>
            <div className="flex justify-between pt-4">
              <p className="font-semibold text-xl">{category}</p>
              <p className="font-semibold text-2xl flex justify-end">
                {rating}
                <FaRegStar className="inline ml-2 text-xl" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Eachbook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Eachbook;
