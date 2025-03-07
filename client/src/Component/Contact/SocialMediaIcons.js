import React from "react";
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center gap-6 py-4 bg-gray-100">
      <NavLink to="#" className="text-gray-600 hover:text-blue-600 text-2xl">
        <FaFacebook />
      </NavLink>
      <NavLink to="#" className="text-gray-600 hover:text-blue-400 text-2xl">
        <FaTwitter />
      </NavLink>
      <NavLink to="#" className="text-gray-600 hover:text-pink-500 text-2xl">
        <FaInstagram />
      </NavLink>
      <NavLink to="#" className="text-gray-600 hover:text-blue-700 text-2xl">
        <FaLinkedin />
      </NavLink>
    </div>
  );
};

export default SocialMediaIcons;
