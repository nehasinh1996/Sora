import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import SortDropdown from "../../Component/SortDropdown/SortDropdown";
import FilterSidebar from "../../Component/FilterSidebar/FilterSidebar";
import productsData from "../../data/products.json";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData); // Initially, show all products
  }, []);

  return (
    <div className="flex">
      {/* Hamburger Button - Show on Hover */}
      <div
        className="fixed left-0 top-70 bg-gray-800 text-white px-2 py-2 rounded-r-lg z-50 cursor-pointer"
        onMouseEnter={() => setIsFilterOpen(true)}
        onMouseLeave={() => setIsFilterOpen(false)}
      >
        ☰
      </div>

      {/* Sidebar - Filter Drawer */}
      <div
        className={`fixed top-70 left-0 h-min w-40 bg-whitep-4 z-40 transform transition-transform duration-1500 ease-in-out overflow-y-auto ${
          isFilterOpen ? "translate-x-" : "-translate-x-full"
        }`}
        onMouseEnter={() => setIsFilterOpen(true)}
        onMouseLeave={() => setIsFilterOpen(false)}
      >
        <FilterSidebar
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      {/* Product Grid */}
      <div className="w-full p-5">
  <h1 className="text-center text-5xl mt-12">All Categories</h1> {/* Increased mt */}
  
  <div className="flex justify-end mt-4 mb-6"> {/* Added mb-6 for extra spacing */}
    <SortDropdown />
  </div>

  {/* Centered Grid with Increased Vertical Gap */}
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 px-8">

    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    ) : (
      <p className="text-center col-span-4 text-gray-500">
        No products found.
      </p>
    )}
  </div>
</div>

    </div>
  );
};

export default AllProduct;
