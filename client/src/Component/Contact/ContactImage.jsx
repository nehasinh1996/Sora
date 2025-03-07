import React from "react";
import contact from "../assets/contact.png";

const ContactImage = () => {
  return (
    <div className="w-full md:w-1/2">
      <img
        src={contact}
        alt="Contact Us"
        className="w-full h-[300px] object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default ContactImage;
