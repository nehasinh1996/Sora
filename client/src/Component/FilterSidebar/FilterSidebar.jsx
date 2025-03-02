import { useState, useEffect } from "react";

const FilterSidebar = ({ products, setFilteredProducts }) => {
  const categories = ["Hair Care", "Lip Care", "Hygiene", "Face"];
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle category selection
  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  // Apply filtering whenever selectedCategories change
  useEffect(() => {
    let filtered = products;
    if (selectedCategories.length > 0) {
      filtered = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    setFilteredProducts(filtered);
  }, [selectedCategories, products, setFilteredProducts]);

  // Function to clear filters
  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    
    <div className="h-fit max-h-[250px] overflow-y-auto p-2 ml-4 rounded-lg flex flex-col justify-start pt-1">
      <h2 className="text-lg font-semibold mt-0 leading-tight pb-1 pl-6">Filters</h2>

      <div className="space-y-1 mt-2 pl-4">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="w-4 h-4"
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>

      <button
        className="text-black-600 text-sm hover:underline cursor-pointer mt-2 mb-0 mr-3"
        onClick={clearFilters}
      >
        Clear All
      </button>
    </div>
  );
};

export default FilterSidebar;
