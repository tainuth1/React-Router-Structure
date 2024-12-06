import React from "react";
import AuthProvider from "./components/auth/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
