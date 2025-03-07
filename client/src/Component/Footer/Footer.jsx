import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 mt-12">
       <hr className="my-1 border-gray-400 border-t mt-19" />
      <div className="container mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="mt-2 text-black space-y-2">
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>
       
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">Collections</h3>
          <ul className="mt-2 text-black space-y-2">
            <li><NavLink to='/Gift Sets & Combos'>Gift Sets & Combos</NavLink></li>
            <li><NavLink to='/Budget-Friendly Picks'>Budget-Friendly Picks</NavLink></li>
            <li><NavLink to='/Vegan & Natural'>Vegan & Natural</NavLink></li>
            <li><NavLink to='/Essentials'>Essentials</NavLink></li>
            <li><NavLink to='/Limited Edition'>Limited Edition</NavLink></li>
          
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold">Privacy & Terms</h3>
          <ul className="mt-2 text-black space-y-2">
            <li><NavLink to="/privicyPolicy">Privacy Policy</NavLink></li>
            <li><NavLink to="/refundPolicy">Refund Policy</NavLink></li>
            <li><NavLink to="/returnAndCancellationPolicy">Return & Cancellation Policy</NavLink></li>
            <li><NavLink to="/termOfService">Terms of Service</NavLink></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-black mt-2">RG Biocosmetic Private Limited,<br />
            C-65 Okhla Phase 1, New Delhi 110020, India.</p>
          <p className="text-black mt-2 phone-icon-black cursor-pointer">📞 +91 67894567344</p>
          <p className="text-black mt-2 cursor-pointer">✉ sorainfo@gmail.com</p>
        </div>
      </div>


      <div className="text-center text-black mt-10 border-t border-gray-700 pt-5">
        <div className="flex justify-center space-x-5">
        <NavLink to="https://www.facebook.com/" className="text-black text-2xl">
        <FaFacebook />
      </NavLink>
      <NavLink to="https://www.instagram.com/" className="text-black text-2xl">
        <FaInstagram />
      </NavLink>
      <NavLink to="https://www.linkedin.com/home?home=&originalSubdomain=in" className="text-black text-2xl">
        <FaLinkedin />
      </NavLink>
        </div>
        <p className="mt-3">Copyright © 2025 Sora Industries Ltd.</p>
       
      </div>
    </footer>
  );
};

export default Footer;