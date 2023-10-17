import React from "react";
import userImg from "../../Assets/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import logo from "../../Assets/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // navigate("/");

    const refreshToken = localStorage.getItem("refreshToken");
    console.log(refreshToken);

    fetch(`http://127.0.0.1:8000/api/v1/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 205) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err.message);
      });
  };

  return (
    <div className="navbar bg-secondary shadow-md px-10">
      <div className="flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-sm flex lg:hidden">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-52 flex justify-center"
          >
            <SideBar></SideBar>
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-primary font-bold"
        >
          {/* Tax House */}
          <img src={logo} alt="" className="w-8"></img>
          <span>E-Laywers</span>
        </Link>
      </div>

      {/* <div className="dropdown dropdown-end">
        <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
          <div className="w-12 rounded-full">
            <img src={userImg} alt="" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-40 flex justify-center"
        >
          <li
            className="btn btn-sm border border-primary hover:bg-primary hover:text-secondary"
            onClick={handleLogOut}
          >
            <a>Logout</a>
          </li>
        </ul>
      </div> */}
      <div className="flex-none">
        <button className="btn btn-sm btn-outline" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
