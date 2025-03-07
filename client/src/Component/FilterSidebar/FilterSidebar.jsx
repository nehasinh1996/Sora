import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5"; // Close Icon

const FilterSidebar = ({ products, setFilteredProducts, category }) => {
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const sidebarRef = useRef(null);

  const filterOptions = {
    "Lip Care": {
      "Lip Concerns": ["Chapped & Dry Lips", "Dark Lips", "Sensitive Lips", "Cracked & Peeling Lips", "Sun-Damaged Lips"],
      "Lip Treatment Type": ["Hydrating & Moisturizing", "Repair & Healing", "Sun Protection (SPF)", "Exfoliation & Scrubbing", "Pigmentation Lightening"],
      "Ingredients": ["Shea Butter", "Hyaluronic Acid", "Beeswax", "Vitamin E", "SPF Protection", "Natural Oils (Coconut, Almond)"]
    },
    "Skin Care": {
      "Skin Concerns": ["Acne & Pimples", "Dry & Dehydrated Skin", "Dark Spots & Pigmentation", "Wrinkles & Fine Lines", "Sun Damage"],
      "Skin Treatment Type": ["Hydration & Moisturization", "Anti-Aging & Wrinkle Care", "Brightening & Whitening", "Exfoliation & Scrubbing", "Repair & Healing"],
      "Ingredients": ["Hyaluronic Acid", "Vitamin C", "Retinol", "Niacinamide", "Aloe Vera"]
    },
    "Personal Care": {
      "Concerns": ["Body Odor", "Skin Sensitivity", "Dry & Rough Skin", "Dark Underarms", "Sweat Control"],
      "Treatment Type": ["Body Moisturizing", "Fragrance & Deodorant", "Skin Soothing & Cooling", "Exfoliation & Brightening"],
      "Ingredients": ["Shea Butter", "Coconut Oil", "Essential Oils (Lavender,Rose)", "Charcoal", "Aloe Vera"]
    },
    "Hygiene": {
      "Hygiene Concerns": ["Bad Breath", "Germ Protection", "Feminine Hygiene", "Sweat & Body Odor"],
      "Hygiene Type": ["Oral Care", "Intimate Care", "Hand & Body Sanitization", "Foot Care"],
      "Ingredients": ["Neem & Tulsi", "Activated Charcoal", "Menthol", "Aloe Vera"]
    },
    "Hair Care": {
      "Hair Concerns": ["Hair Fall & Thinning", "Dandruff & Scalp Issues", "Dry & Frizzy Hair", "Split Ends", "Oily Scalp"],
      "Hair Treatment Type": ["Hair Growth & Strengthening", "Dandruff Control", "Deep Conditioning", "Heat & Pollution Protection", "Scalp Nourishment"],
      "Ingredients": ["Argan Oil", "Keratin", "Biotin", "Onion Extract", "Tea Tree Oil", "Hibiscus Extract"]
    }
  };

  const selectedFiltersData = filterOptions[category] || {};

  const handleCheckboxChange = (filter) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = new Set(prevFilters);
      updatedFilters.has(filter) ? updatedFilters.delete(filter) : updatedFilters.add(filter);
      return new Set(updatedFilters);
    });
  };

  useEffect(() => {
    if (selectedFilters.size > 0) {
      setFilteredProducts(
        products.filter((product) => [...selectedFilters].some((filter) => product.tags.includes(filter)))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedFilters, products, setFilteredProducts]);

  const clearFilters = () => setSelectedFilters(new Set());

  return (
    <div className="relative inline-block text-left" ref={sidebarRef}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          className="text-gray-600 hover:text-gray-900 text-2xl"
          aria-label="Close filter sidebar"
          onClick={() => setFilteredProducts(products)} // Close the filter
        >
          <IoClose />
        </button>
      </div>
      {Object.entries(selectedFiltersData).map(([categoryName, filters]) => (
        <div key={categoryName} className="mt-2">
          <h3 className="font-semibold pb-2">{categoryName}</h3>
          {filters.map((filter) => (
            <label key={filter} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.has(filter)}
                onChange={() => handleCheckboxChange(filter)}
                className="w-4 h-4"
              />
              <span className="text-gray-700">{filter}</span>
            </label>
          ))}
          <hr className="my-4 border-t border-gray-400 w-[calc(100%+2rem)] -mx-4" />
        </div>
      ))}
      <button
        className="w-full bg-red-500 text-white p-2 mt-4 rounded-lg shadow hover:bg-red-600"
        onClick={clearFilters}
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
