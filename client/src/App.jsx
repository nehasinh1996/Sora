import React from "react";
import Banner from "./Component/OfferBanner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SkinCare from "./Pages/SkinCare/SkinCare";
import Hygiene from "./Pages/Hygiene/Hygiene";
import Personalcare from "./Pages/PersonalCare/Personalcare";
import HairCare from "./Pages/HairCare/HairCare";
import LipCare from "./Pages/LipCare/LipCare";
import Order from "./Pages/Orders/Order";
import Cart from "./Pages/Cart/Cart";

import ProfileMenu from "./Pages/Profile/ProfileMenu";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/SignUp";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import OtpVerification from "./Pages/Otp/OtpVerification"; 
import ContactUs from "./Pages/Contact/ContactUs";
import AboutUs from "./Pages/About/About";
import Profile from "./Pages/Profile/Profile";
import Wishlist from "./Pages/Wishlist/Wishlist";
import PrivacyPolicy from "./Pages/PrivicyPolicy/PrivicyPolicy";
import RefundPolicy from "./Pages/Refund/Refund";
import ReturnCancellationPolicy from "./Pages/ReturnPolicy/ReturnCancellationPolicy";
import TermsOfService from "./Pages/TermsOfService/TermsOfService";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skincare" element={<SkinCare />} />
          <Route path="/hygiene" element={<Hygiene />} />
          <Route path="/personalcare" element={<Personalcare />} />
          <Route path="/haircare" element={<HairCare />} />
          <Route path="/lipcare" element={<LipCare />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="profilemenu" element={<ProfileMenu />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} /> 
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privicyPolicy" element={<PrivacyPolicy />} />
          <Route path="/refundPolicy" element={<RefundPolicy />} />
          <Route path="/returnAndCancellationPolicy" element={<ReturnCancellationPolicy />} />
          <Route path="termOfService" element={<TermsOfService/>}/>
         
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
