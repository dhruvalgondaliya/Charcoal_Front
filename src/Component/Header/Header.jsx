import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { LogOut, User } from "lucide-react";
import user from "../../assets/User.png";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0); // you can update this from context or API

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username"); // Or fetch from API if needed

    setIsLoggedIn(!!token);
    setUsername(storedUsername || "User");

    // Sample: load cart count from localStorage or API
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(storedCart.length);
  }, []);

  // LogOut Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="logo image" className="logo w-28" />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 relative">
          {/* Cart Button */}
          <button
            className="relative text-xl text-black hover:text-[var(--color-primary-hover)]"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart className="w-5 h-5 text-yellow-500 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--color-red)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Dropdown */}
          {isLoggedIn && (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer"
              >
                <img src={user} alt="UserProfile" className="w-7 h-7" />
                <span className="font-medium">{username}</span>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40 py-2 z-50">
                  <Link
                    to="#"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    onClick={() => setShowDropdown(false)}
                  >
                    <User className="w-5 h-5" />
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Login button if not logged in */}
          {!isLoggedIn && (
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
