import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navtext max-w-7xl mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-[15px] font-medium text-slate-500">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <IoHomeOutline className="inline text-[17px]" />
                  Home
                </NavLink>
              </li>
              <li className="text-[15px] font-medium text-slate-500">
                <NavLink
                  to="/listedbooks"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <IoListOutline className="inline text-[17px]" />
                  Listed Books
                </NavLink>
              </li>
              <li className="text-[15px] font-medium text-slate-500">
                <NavLink
                  to="/pagestoread"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <FiBookOpen className="inline text-[17px]" />
                  Pages to Read
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[15px] md:font-bold md:text-[30px]">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[15px] font-medium text-slate-500">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <IoHomeOutline className="inline text-[17px]" />
                Home
              </NavLink>
            </li>
            <li className="text-[15px] font-medium text-slate-500">
              <NavLink
                to="/listedbooks"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <IoListOutline className="inline text-[17px]" />
                Listed Books
              </NavLink>
            </li>
            <li className="text-[15px] font-medium text-slate-500">
              <NavLink
                to="/pagestoread"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <FiBookOpen className="inline text-[17px]" />
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#23BE0A] md:text-lg text-white md:font-semibold mr-2 hover:text-[#23BE0A] hover:bg-slate-100">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] md:text-lg text-white md:font-semibold hover:text-[#59C6D2] hover:bg-slate-100">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
