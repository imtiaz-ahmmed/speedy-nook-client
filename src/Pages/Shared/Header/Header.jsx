import React, { useContext } from "react";
import logo from "../../../../public/logocar.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-green-100 p-3 lg:p-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-toys">All Toys</NavLink>
              </li>
              <li>
                <NavLink to="/my-toys">My toys</NavLink>
              </li>
              <li>
                <NavLink to="/add-toys">Add a Toy</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="/">
              {" "}
              <img className="h-12 rounded-full" src={logo} alt="" />
            </Link>
            <a href="/" className=" normal-case text-xl lg:text-3xl font-bold">
              <span className="text-green-500">S</span>peedy
              <span className="text-green-500"> N</span>ook
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                to="/all-toys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                to="/my-toys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                My Toys
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                to="/add-toys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Add a Toy
              </NavLink>
            </li>

            <li className="text-lg">
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <NavLink to="/login">
            <button className="btn bg-green-400 hover:bg-green-500 rounded-lg border-none text-lg ">
              Login
            </button>
          </NavLink> */}
          {user ? (
            <div className="flex gap-2 items-center ">
              <img
                className="h-12 w-12 lg:h-20 lg:w-20 rounded-full "
                src={user.photoURL ? user.photoURL : ""}
                alt=""
                data-tooltip-id="user-name"
                data-tooltip-content={user.displayName ? user.displayName : ""}
              />
              <Tooltip id="user-name" />
              <button onClick={handleLogOut} className="btn bg-yellow-700">
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-yellow-700">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
