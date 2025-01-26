import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { RiPagesLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Wishlist = ({ bookid, bookdata }) => {
  const desiredwishbook = bookdata.find(
    (eachbook) => eachbook.bookId === bookid
  );
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = desiredwishbook;

  const navigate = useNavigate();
  const viewbookdetailshandling = () => {
    navigate(`/wish_read/${bookId}`);
  };
  return (
    <div className="max-w-full mx-auto px-1 lg:px-3">
      <div className="card flex flex-col lg:flex-row bg-base-100 shadow-xl border-2 border-slate-200 mb-4 overflow-hidden">
        <figure className="w-full lg:w-1/3">
          <img
            src={image}
            className="w-full h-60 sm:h-72 object-cover p-2 rounded-2xl"
            alt="Book cover"
          />
        </figure>

        <div className="w-full lg:w-2/3 p-4">
          <h2 className="card-title font-bold text-xl sm:text-2xl lg:text-3xl">
            {bookName}
          </h2>
          <p className="font-medium text-base sm:text-lg text-slate-900 mt-1">
            By : {author}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center mt-3">
            <div className="flex items-center text-nowrap mb-2 sm:mb-0">
              <span className="font-extrabold text-sm sm:text-base md:text-lg">
                Tag :
              </span>
              <div className="flex flex-wrap ml-2">
                {tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="mb-2 mr-2 text-xs sm:text-sm md:text-base font-semibold text-[#23BE0A] bg-slate-200 px-2 py-1 rounded-3xl"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
            <p className="font-semibold text-sm sm:text-base md:text-lg flex items-center mt-2 sm:mt-0 sm:ml-6">
              <IoLocationOutline className="inline mr-2" />
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center mt-3 sm:space-x-6 text-sm sm:text-base md:text-lg font-semibold text-slate-600">
            <div className="flex items-center mb-2 sm:mb-0">
              <SlPeople className="inline mr-2" />
              Publisher : {publisher}
            </div>
            <div className="flex items-center">
              <RiPagesLine className="inline mr-2" />
              Page : {totalPages}
            </div>
          </div>

          <div className="flex flex-wrap items-center border-t-2 border-slate-300 mt-4 pt-3 font-bold space-y-2 sm:space-y-0">
            <button className="text-[#328EFF] bg-[#328EFF24] px-3 py-1 rounded-3xl mr-2 text-sm sm:text-base">
              Category : {category}
            </button>
            <button className="text-[#FFAC33] bg-[#FFAC3324] px-3 py-1 rounded-3xl mr-2 text-sm sm:text-base">
              Rating : {rating}
            </button>
            <button
              onClick={viewbookdetailshandling}
              className="bg-[#23BE0A] text-white px-3 py-1 rounded-3xl text-sm sm:text-base"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Wishlist.propTypes = {
  bookid: PropTypes.string.isRequired,
  bookdata: PropTypes.array.isRequired,
};

export default Wishlist;
