import React from "react";
import logo from "../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Navbar.css";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between lg:px-28 px-5 pt-5 pb-4 bg-black w-[100vw] mx-auto navbg">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          width={160}
          height={32}
          className="lg:w-[120px] w-[70px]"
          loading="lazy"
        />
      </Link>

      <nav>
        <ul className="flex flex-wrap items-center justify-center gap-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-700 py-[4px] lg:px-8 px-3 rounded-[8px] ">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-700 py-[4px] lg:px-8 px-3  rounded-[8px] ">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="bg-richblack-700 py-[4px] px-8 rounded-[8px] "
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-700 py-[4px] px-8 rounded-[8px] ">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
