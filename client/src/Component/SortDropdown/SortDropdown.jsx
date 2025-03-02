import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SortDropdown = ({ handleSort }) => {
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseLeave={() => setShowSortMenu(false)} // Close only when leaving sort button & menu
    >
      {/* Sort Button */}
      <button
        className="flex items-center text-gray-600 font-medium px-4 py-2 rounded-lg bg-white hover:bg-gray-100 transition-all duration-400 cursor-pointer"
        onClick={() => setShowSortMenu(!showSortMenu)}
      >
        SORT BY
        {showSortMenu ? (
          <FaChevronUp className="ml-2 text-sm" />
        ) : (
          <FaChevronDown className="ml-2 text-sm" />
        )}
      </button>

      {/* Dropdown Menu */}
      {showSortMenu && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-56 z-50 transition-all duration-300"
        >
          <ul className="text-left">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSort("best_selling", "Best Selling");
                setShowSortMenu(false);
              }}
            >
              Best Selling
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSort("new_arrival", "New Arrival");
                setShowSortMenu(false);
              }}
            >
              New Arrival
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSort("price_low_high", "Price, Low to High");
                setShowSortMenu(false);
              }}
            >
              Price: Low to High
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSort("price_high_low", "Price, High to Low");
                setShowSortMenu(false);
              }}
            >
              Price: High to Low
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
