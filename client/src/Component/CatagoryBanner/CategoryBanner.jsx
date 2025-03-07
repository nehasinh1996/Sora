import { useState, useEffect } from "react";

const CategoryBanner = ({ title, imageSrc, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="left-div w-[720px] h-[400px] flex overflow-hidden">
          <img src={imageSrc} alt={title} className="w-full h-full object-fit" />
        </div>
        <div className="right-div w-[800px] h-[400px] bg-green-50 text-center flex flex-col justify-center">
          <p className="text-5xl  font-serif text-green-950 ">
            {texts[currentIndex][0]}
          </p>
          <p className="text-2xl text-gray-600 mt-2 font-extralight">
            {texts[currentIndex][1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
