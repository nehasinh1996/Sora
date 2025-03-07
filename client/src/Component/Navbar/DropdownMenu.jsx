import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion for smooth animation

const DropdownMenu = ({ title, mainPath, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Keep dropdown open when hovering over menu or dropdown itself
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  // **Dropdown Menu Animation (Staggered Effect)**
  const dropdownVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.6 }, // One by one effect
    },
    closed: { opacity: 0 },
  };

  // **Dropdown Item Animation (Left to Right)**
  const itemVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Move from left to right
    closed: { opacity: 0, x: -20 }, // Start position off-screen to the left
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🔹 Main Category (Click navigates, hover shows dropdown) */}
      <NavLink
        to={mainPath}
        className="cursor-pointer hover:text-gray-500 transition block"
      >
        {title}
      </NavLink>

      {/* 🔹 Dropdown Menu (Visible on Hover) */}
      <motion.ul
        className="absolute left-0 mt-2 w-70 bg-white shadow-lg rounded-lg py-2 z-50"
        ref={dropdownRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={dropdownVariants}
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="cursor-pointer"
            variants={itemVariants}
          >
            <NavLink
              to={item.path}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition whitespace-nowrap"
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </li>
  );
};

export default DropdownMenu;
