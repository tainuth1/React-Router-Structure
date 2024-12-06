import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Sidebar = () => {
  const { logout } = useAuth();
  return (
    <div className="flex">
      <div className="w-96 h-[100vh] bg-blue-600 shadow-2xl">
        <ul className="ml-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      </div>
      <div className="w-full h-[100vh] shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
