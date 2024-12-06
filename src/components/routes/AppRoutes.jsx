import React from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Sidebar from "../layouts/Sidebar";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Sidebar />
          </PrivateRoute>
        }
      >
        <Route path="" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
