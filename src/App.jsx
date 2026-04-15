import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {Toaster} from "react-hot-toast"
import ProtectedRoute from "./components/ProtectedRoute";

import { useEffect } from "react";


const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/signin" || location.pathname === "/signup";
 
  return (
    <div>
      <Toaster />
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path={"/"} element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        } />
        <Route path={"/movie/:id"} element={
          <ProtectedRoute>
            <Moviepage />
          </ProtectedRoute>
        } />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
        
      </Routes>
    </div>
  );
};

export default App;
