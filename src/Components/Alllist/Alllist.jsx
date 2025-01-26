import { IoIosArrowDown } from "react-icons/io";
import "./Alllist.css";
import { useEffect, useState } from "react";
import { getread, getwish } from "../localstorage1";
import Readlist from "../Readlist/Readlist";
import PropTypes from "prop-types";
import Wishlist from "../Wishlist/Wishlist";

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
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted px-2md:px-0">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-nowrap"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {readlist.map((bookid, idx) => (
              <Readlist
                key={idx}
                bookid={bookid}
                bookdata={bookdata}
              ></Readlist>
            ))}
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
            {wishlist.map((bookid, idx) => (
              <Wishlist
                key={idx}
                bookid={bookid}
                bookdata={bookdata}
              ></Wishlist>
            ))}
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
