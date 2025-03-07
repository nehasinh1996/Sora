import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SortDropdown = ({ handleSort }) => {
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div className="relative w-[20rem]">
    
       

      {/* Sticky Sort Button */}
      <div className="sticky top-96 w-[20rem] h-10 flex justify-end  bg-white ">
        <button
          className="flex items-center text-gray-600 font-medium px-4 py-2 rounded-lg bg-white hover:bg-gray-100 transition-all duration-400 cursor-pointer"
          onClick={() => setShowSortMenu(!showSortMenu)}
        >
          SORT BY
          {showSortMenu ? <FaChevronUp className="ml-2 text-sm" /> : <FaChevronDown className="ml-2 text-sm" />}
        </button>

        {/* Dropdown Menu */}
        {showSortMenu && (
          <div
            className="absolute left-1/2 transform -translate-x-1/2 mt-10 ml-22 bg-white shadow-lg rounded-lg w-40 z-[999] transition-all duration-300"
          >
            <ul className="text-left">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { handleSort("best_selling"); setShowSortMenu(false); }}>
                Best Selling
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { handleSort("new_arrival"); setShowSortMenu(false); }}>
                New Arrival
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { handleSort("price_low_high"); setShowSortMenu(false); }}>
                Price: Low to High
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { handleSort("price_high_low"); setShowSortMenu(false); }}>
                Price: High to Low
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Scrollable content */}
      
    </div>
  );
};

export default SortDropdown;
