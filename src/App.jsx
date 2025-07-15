import "./App.css";
import BackToTopButton from "./Component/BackToTopButton";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Registration from "./Page/Registration";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [_, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const location = useLocation();

  // Update login state if token is 
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]); 

  return (
    <>
      <BackToTopButton />

      {location.pathname !== "/login" && location.pathname !== "/registration" && <Header />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      {location.pathname !== "/login" && location.pathname !== "/registration" && <Footer />}
    </>
  );
}

export default App;
