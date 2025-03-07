import React, { useState, useOptimistic } from "react";
import axios from "axios";
import { Carousel } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import CategoryCard from '../../Component/OurCollections/CategoryCard'
import AllProduct from "../AllProducts/AllProducts";


export default function Home({ onClose }) {
  const [image, setImage] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  // `useOptimistic` for showing UI changes before API response
  const [optimisticSearch, setOptimisticSearch] = useOptimistic(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSearch = async () => {
    if (!image) return;
    setOptimisticSearch(true); // UI ko immediately update karne ke liye
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/search", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error searching image", error);
    }

    setOptimisticSearch(false); // API response ke baad state update
    setLoading(false);
  };

  return (
    <>
      <div className="mt-[7.3rem]">
        {/* Auto-swiping Carousel */}
        <Carousel autoplay autoplayDelay={3000} loop className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh]">
          {["bg1.png", "bgimg4.png", "bgimg3.png", "Skincareimg.png"].map((src, idx) => (
            <img key={idx} src={src} alt={`slide ${idx + 1}`} className="w-full h-full object-cover" />
          ))}
        </Carousel>

        {/* Collections Section */}
        
      <h1 className="text-center text-5xl mt-8">Our Collections</h1>
      <div className="flex mt-12 mx-40 justify-around">
        <CategoryCard image="Skincare_logo.png" title="SkinCare" route="/skincare" />
        <CategoryCard image="Hygiene_logo.png" title="Hygiene" route="/hygiene" />
        <CategoryCard image="p11.png" title="Personal Care" route="/personalcare" />
        <CategoryCard image="Haircare_logo.png" title="Hair Care" route="/haircare" />
        <CategoryCard image="Lipcare_logo.png" title="Lip Care" route="/lipcare" />
      </div>
    </div>
   
       
     

      {/* Banner Image */}
      <div className="mt-12">
        <img src="imgg.png" alt="Banner" className="w-full" />
      </div>
      <AllProduct/>

      <NavLink to="/SkinCare" className="text-black font-semibold hover:underline" />

      {/* Floating Search by Image Button */}
      <div
        className="fixed bottom-6 right-6 bg-black/80 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-black transition-all duration-200"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Search By Image
      </div>

      {/* Dropdown for Image Search */}
      {showDropdown && (
        <div className="fixed bottom-16 right-6 bg-white p-4 shadow-lg rounded-lg w-64">
          <h2 className="text-center text-lg font-bold text-gray-700 mb-2">Upload Image</h2>
          <label className="cursor-pointer bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 inline-block w-full text-center">
            Choose File
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
          {image && <p className="mt-2 text-gray-700 text-center">{image.name}</p>}
          <button
            onClick={handleSearch}
            className={`w-full mt-2 ${
              optimisticSearch ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-100 text-black"
            } font-semibold py-2 rounded-lg hover:bg-gray-200 transition-all duration-200`}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      )}
     
    </>
  );
}

// import React from 'react';
// import { Carousel } from "@material-tailwind/react";
// // import BeforeProfile from '../../Pages/Profile/BeforeProfile'
// import Login from '../Login/Login';
// import Signup from '../Signup/SignUp';
// import ForgetPassword from '../ForgetPassword/ForgetPassword';
// import ContactUs from '../Contact/ContactUs';
// import CategoryCard from '../../Component/Home/CategoryCard';
// import { Link } from "react-router-dom";
// import AllProduct from '../AllProducts/AllProducts';

// const Home = () => {
//   return (
//     <>
//       <div>
//         {/* Auto-swiping Carousel */}
//         <Carousel autoplay={true} autoplayDelay={3000} loop={true} className="">
//           <img src="bg1.png" alt="image 1" className="h-fit w-full object-cover" />
//           <img src="bgimg4.png" alt="image 2" className="h-full w-full object-cover" />
//           <img src="bgimg3.png" alt="image 3" className="h-full w-full object-cover" />
//           <img src="5g.png" alt="image 4" className="h-full w-full object-cover" />
//         </Carousel>

//         <div>
//       {/* Collections Section */}
    

//       {/* Banner Image */}
//       <div className="mt-12">
//         <img src="imgg.png" alt="Banner" className="w-full" />
//       </div>

//       <AllProduct/>
   
//     </>
//   );
// };

// export default Home;