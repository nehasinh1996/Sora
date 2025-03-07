import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cart from "../../Pages/Cart/Cart";
import ProfileMenu from "../../Pages/Profile/ProfileMenu";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "../SearchBar/SearchBar";
import useStore from "../../Context/StoreContext";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [wishlistClicked, setWishlistClicked] = useState(false);
  const cartRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    { title: "Skin Care", mainPath: "/skinCare", items: [
      { name: "Face Wash & Cleansers", path: "/skincare/facewash&cleansers" },
      { name: "Sunscreens & SPF Protection", path: "/skincare/sunscreens&spfprotection" },
      { name: "Face Masks & Peels", path: "/skincare/facemasks&peels" },
      { name: "Night Creams & Sleeping Masks", path: "/skincare/nightcreams&sleepingmasks" },
      { name: "Moisturizers & Face Creams", path: "/skincare/moisturizers&facecreams" },
    ]},
    { title: "Personal Care", mainPath: "/personalcare", items: [
      { name: "Body Wash", path: "/personalcare/bodywash" },
      { name: "Deodorants", path: "/personalcare/deodorants" },
      { name: "Fragrance", path: "/personalcare/fragrance" },
    ]},
    { title: "Hair Care", mainPath: "/haircare", items: [
      { name: "Shampoo", path: "/haircare/shampoo" },
      { name: "Conditioner", path: "/haircare/conditioner" },
      { name: "Hair Oil", path: "/haircare/oil" },
    ]},
    { title: "Hygiene", mainPath: "/hygiene", items: [
      { name: "Hand Wash & Sanitizers", path: "/hygiene/handwash&sanitizers" },
      { name: "Wet Wipes & Tissues", path: "/hygiene/wetwipes&tissues" },
      { name: "Toothpaste & Mouthwash", path: "/hygiene/toothpaste&mouthwash" },
    ]},
    { title: "Lip Care", mainPath: "/lipcare", items: [
      { name: "Lip Sticks", path: "/lipcare/lipsticks" },
      { name: "Lip Gloss", path: "/lipcare/lipgloss" },
      { name: "Lip Balm", path: "/lipcare/lipbalm" },
      { name: "Lip Oil", path: "/lipcare/lipoil" },
      { name: "Lip Tint", path: "/lipcare/liptint" },
    ]}
  ];

  const { cart } = useStore();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target) && showCart) {
        setShowCart(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target) && showProfile) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart, showProfile]);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWishlistClick = () => {
    setWishlistClicked(true);
    navigate("/wishlist");
  };

  return (
    <nav className="fixed top-0 left-0 w-full mt-9 bg-white/30 backdrop-blur-lg shadow-md z-50 hover:bg-white transition ">
      <div className="flex justify-between items-center px-6 sm:px-10 py-3">
        <img
          className="h-10 sm:h-12 cursor-pointer"
          src="/Sora.png"
          alt="logo"
          onClick={handleLogoClick}
        />

        <ul className="hidden sm:flex gap-6 lg:gap-10">
          {categories.map((category) => (
            <div key={category.title} className="relative group">
              <DropdownMenu title={category.title} mainPath={category.mainPath} items={category.items} />
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </ul>

        <div className="flex gap-5 sm:gap-7 relative items-center">
          <SearchBar />
          <FaHeart
            className={`text-lg sm:text-xl cursor-pointer transition ${wishlistClicked ? "text-gray-700" : "hover:text-gray-700"}`}
            onClick={handleWishlistClick}
          />

<div className="relative" ref={cartRef} onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
            <FaShoppingCart className="text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
            {showCart && (
              <div className="absolute right-0 mt-2 w-64 sm:w-80 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <Cart />
              </div>
            )}
          </div>

          <div className="relative" ref={profileRef} onMouseEnter={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)}>
            <FaUser className="text-lg sm:text-xl cursor-pointer hover:text-gray-500 transition" />
            {showProfile && (
              <div className="absolute right-0 mt-2 bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <ProfileMenu onClose={() => setShowProfile(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
