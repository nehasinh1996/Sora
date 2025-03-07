import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import SortDropdown from "../../Component/SortDropdown/SortDropdown";
import productsData from "../../data/products";
import CategoryBanner from "../../Component/CatagoryBanner/CategoryBanner";
import FilterSidebar from "../../Component/FilterSidebar/FilterSidebar";
import { FaBars } from "react-icons/fa"; // Hamburger Icon
import { IoClose } from "react-icons/io5"; // Close Icon

const LipCare = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Track if the filter is open
  const [isHoveringHamburger, setIsHoveringHamburger] = useState(false); // Track if hovering over hamburger
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false); // Track if hovering over sidebar
  const category = "Lip Care";

  useEffect(() => {
    const lipCareProducts = productsData.filter(
      (product) => product.category === category
    );

    setProducts(lipCareProducts);
    setFilteredProducts(lipCareProducts);
    setLoading(false);
  }, []);

  // Sorting Function
  const handleSort = (sortKey) => {
    let sortedProducts = [...filteredProducts];

    switch (sortKey) {
      case "best_selling":
        sortedProducts.sort((a, b) => b.sales - a.sales);
        break;
      case "new_arrival":
        sortedProducts.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
        break;
      case "price_low_high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = [...products]; // Reset to original order
    }

    setSortOption(sortKey);
    setFilteredProducts(sortedProducts);
  };

  // Show or hide the filter sidebar based on hover states
  useEffect(() => {
    if (isHoveringHamburger || isHoveringSidebar) {
      setIsFilterOpen(true);
    } else {
      setIsFilterOpen(false);
    }
  }, [isHoveringHamburger, isHoveringSidebar]);

  return (
    <>
      <div>
        <CategoryBanner 
          title={category} 
          imageSrc="Lipcare_banner.png" 
          texts={[
            ["Soft, Luscious Lips Every Day!", "Because your smile deserves extra care."],
            ["Soft, Hydrated, Beautiful!", "Hydration that lasts all day."],
            ["Kiss Dryness Goodbye!","Moisture-rich lip care for all-day softness."],
            ["Lips that Speak Confidence!","Because your smile deserves extra care."],
            ["Smooth Lips, Stunning Smiles!","Hydration that lasts all day."]
        ]} 
        />
      </div>

      {/* Filter and Sorting Section */}
      <div className="flex justify-between items-center px-5 mt-4 mb-6">
        {/* Hamburger Button - Aligned with Sort By */}
        <button 
          className="bg-gray-800 text-white p-2 rounded-lg shadow-lg flex items-center -ml-6"
          onMouseEnter={() => setIsHoveringHamburger(true)} // Track hover over hamburger
          onMouseLeave={() => setIsHoveringHamburger(false)} // Track mouse leave from hamburger
        >
          
          <FaBars className="text-xl" />
          
        </button>

        {/* Sort Dropdown */}
        <div className="relative z-10">
        <SortDropdown handleSort={handleSort} />
        </div>
      </div>

      {/* Sidebar for Filters with Transition */}
      <div
        className={`fixed top-0 left-0 h-full w-70 bg-white border-r border-gray-300 p-4 transform transition-transform duration-300 ease-in-out z-[50] shadow 
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
        onMouseEnter={() => setIsHoveringSidebar(true)} // Track hover over sidebar
        onMouseLeave={() => setIsHoveringSidebar(false)} // Track mouse leave from sidebar
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-600 text-3xl"
          onClick={() => setIsFilterOpen(false)} // Close filter on click
        >
          <IoClose />
        </button>

        <FilterSidebar category={category} products={products} setFilteredProducts={setFilteredProducts} />
       

        
      </div>

      {/* Product Listing */}
      <div className="w-full">
        {/* Loading State */}
        {loading ? (
          <p className="text-center text-lg">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-lg col-span-4">No lip care products available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default LipCare;
