import React from "react";
import { Outlet } from "react-router-dom";
import LayoutNavbar from "../components/LayoutNavbar";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Login from "./Login";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {user ? (
        <div className="min-h-screen bg-[var(--back-color)]">
          <LayoutNavbar />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Layout;
