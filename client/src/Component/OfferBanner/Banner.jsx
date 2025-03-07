import React, { useState, useEffect } from "react";

const messages = [
  "Get up to 30% off on your first order",
  "Fresh Offer - Limited Time Only!",
  "Grab the best deal",
  "Huryy up!!!"
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade-out

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsVisible(true); // Start fade-in
      }, 500); // Half second delay before switching text
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white text-center py-2 font-extralight text-xl z-[100]">
      <p
        key={index}
        className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {messages[index]}
      </p>
    </div>
  );
};

export default Banner;
