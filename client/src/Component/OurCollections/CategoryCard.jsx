import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, title, route }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={route} // Navigate on click
      className="flex flex-col items-center transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`h-32 w-32 rounded-full object-cover transition-transform duration-300 ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />
      <h1
        className={`text-2xl mt-3 transition-transform duration-300 ${
          hovered ? "scale-90" : "scale-100"
        }`}
      >
        {title}
      </h1>
    </Link>
  );
};

export default CategoryCard;
