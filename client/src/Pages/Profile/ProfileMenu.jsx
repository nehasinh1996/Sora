import React from "react";
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const ProfileMenu = ({ onClose }) => {
    const navigate = useNavigate();
  return (
    <div 
      className="absolute right-0 mt-2 w-70 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
      onClick={() => console.log("Hovered menu")} 
      onMouseLeave={onClose} // Close menu when leaving it
    >
      <ul className="text-gray-900 font-medium">
      <NavLink to="/Login" className="block px-4 py-2 font-light hover:bg-gray-100 rounded"
        
        >Log In</NavLink>
        <NavLink to="/Profile" className="block px-4 py-2 font-light hover:bg-gray-100 rounded"
        
        >Personal Details</NavLink>
        <NavLink to="/Order" className="block px-4 py-2 font-light hover:bg-gray-100">Orders</NavLink>
        
      
        <NavLink to="/AboutUs" className="block px-4 py-2 font-light hover:bg-gray-100">About Us</NavLink>
       
        <NavLink 
  to="/ContactUs"
  className="block px-4 py-2 font-light hover:bg-gray-100"
  onClick={onClose} // This will close the menu when clicked
>
  Contact Us
</NavLink>
        <NavLink to="/support" className="block px-4 py-2 font-light hover:bg-gray-100">Help & Support</NavLink>
        <NavLink to="/privacy-policy" className="block px-4 py-2 font-light hover:bg-gray-100">Privacy Policy</NavLink>
        <NavLink to="/logout" className="block px-4 py-2 text-black hover:bg-gray-100 rounded-lg">Logout</NavLink>
      </ul>
    </div>
  );
};

export default ProfileMenu;
