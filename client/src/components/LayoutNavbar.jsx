import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/features/authSlice";

const LayoutNavbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="shadow bg-[var(--back-color)]">
      <nav className="flex items-center justify-between mt-2 max-w-7xl mx-auto px-4 py-3.5 transition-all">
        <Link to="/">
          <img src={logo} alt="ResumeBuddy" className="h-11 w-auto" />
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden text-[var(--highlight-color)]">
            Hi, {user?.name}
          </p>

          <button
            onClick={logoutUser}
            className="bg-[var(--back-color)] hover:bg-slate-200 text-slate-800 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 duration-300 transition-all"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LayoutNavbar;
