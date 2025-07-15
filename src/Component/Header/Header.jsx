import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // LogOut Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo image" className="logo ml-10" />
        </div>

        {/* Login / Logout Button */}
        <div className="md:flex items-center">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-[var(--color-red)] hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-black px-5 py-2 rounded-full font-bold transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
