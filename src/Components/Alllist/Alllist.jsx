import { IoIosArrowDown } from "react-icons/io";
import "./Alllist.css";
import { useEffect, useState } from "react";
import { getread, getwish } from "../localstorage1";
import Readlist from "../Readlist/Readlist";
import PropTypes from "prop-types";
import Wishlist from "../Wishlist/Wishlist";
import sortedarray from "../Sortingmanager";

const Alllist = ({ bookdata }) => {
  const [readlist, setreadlist] = useState([]);
  const [wishlist, setwishlist] = useState([]);

  useEffect(() => {
    const getreadlist = getread();
    setreadlist(getreadlist);
  }, []);
  useEffect(() => {
    const getwishlist = getwish();
    setwishlist(getwishlist);
  }, []);

  const handlesorting = (criteria) => {
    let sortIndex;
    if (criteria === "rating") {
      sortIndex = 1;
    } else if (criteria === "totalPages") {
      sortIndex = 2;
    } else if (criteria === "yearOfPublishing") {
      sortIndex = 3;
    }

    const sortedReadlist = sortedarray(sortIndex, readlist, bookdata);
    const sortedWritelist = sortedarray(sortIndex, wishlist, bookdata);
    setreadlist(sortedReadlist);
    setwishlist(sortedWritelist);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center mt-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white hover:bg-[#23BE0A] font-semibold text-[18px]"
          >
            Sort By
            <IoIosArrowDown className="inline ml-2" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow text-slate-800 bg-slate-100 font-semibold text-[15px] mt-1"
          >
            <li>
              <button onClick={() => handlesorting("rating")}>Rating</button>
            </li>
            <li>
              <button onClick={() => handlesorting("totalPages")}>
                Number of pages
              </button>
            </li>
            <li>
              <button onClick={() => handlesorting("yearOfPublishing")}>
                Publisher year
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted px-2md:px-0 mb-6">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-nowrap"
          aria-label="Readlist Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {readlist.length === 0 ? (
              <div className="flex justify-center items-center">
                <img src="images/nodata.jpg" className="w-96"></img>
              </div>
            ) : (
              <div>
                {readlist.map((bookid, idx) => (
                  <Readlist
                    key={idx}
                    bookid={bookid}
                    bookdata={bookdata}
                  ></Readlist>
                ))}
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-nowrap"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {wishlist.length === 0 ? (
              <div className="flex justify-center items-center">
                <img src="images/nodata.jpg" className="w-96"></img>
              </div>
            ) : (
              <div>
                {wishlist.map((bookid, idx) => (
                  <Wishlist
                    key={idx}
                    bookid={bookid}
                    bookdata={bookdata}
                  ></Wishlist>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Alllist.propTypes = {
  bookdata: PropTypes.array.isRequired,
};

export default Alllist;
