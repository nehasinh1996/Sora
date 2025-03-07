import React, { useState } from "react";
import axios from "axios";

export default function ImageSearch() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSearch = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    
    try {
      const response = await axios.post("http://localhost:5000/search", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Error searching image", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-pastel-blue flex flex-col items-center justify-center p-6 relative">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-pastel-purple mb-4">AI-Powered Image Search</h1>
        <label className="cursor-pointer bg-pastel-purple text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-500 transition-all duration-200 inline-block">
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {image && <p className="mt-2 text-gray-700">Selected: {image.name}</p>}
        <button
          onClick={handleSearch}
          className="w-full mt-4 bg-pastel-green text-white font-semibold py-3 rounded-lg hover:bg-green-500 transition-all duration-200"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search Image"}
        </button>
      </div>
      <div className="mt-6 w-full max-w-lg">
        {results.length > 0 && (
          <h2 className="text-lg font-semibold text-pastel-purple mb-3 text-center">Results:</h2>
        )}
        <div className="grid grid-cols-2 gap-4">
          {results.map((result, index) => (
            <div key={index} className="bg-pastel-yellow shadow rounded-lg p-2">
              <img
                src={result.image_url}
                alt="Result"
                className="w-full h-32 object-cover rounded"
              />
              <p className="text-sm text-gray-700 text-center mt-2">Similarity: {result.similarity.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Floating Search by Image Button */}
      <div 
        className="fixed bottom-6 right-6 bg-pastel-purple text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-purple-300 transition-all duration-200"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Search By Image
      </div>
      {/* Dropdown for Image Search */}
      {showDropdown && (
        <div className="fixed bottom-16 right-6 bg-white p-4 shadow-lg rounded-lg w-64">
          <h2 className="text-center text-lg font-bold text-gray-700 mb-2">Upload Image</h2>
          <label className="cursor-pointer bg-pastel-purple text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-500 transition-all duration-200 inline-block w-full text-center">
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {image && <p className="mt-2 text-gray-700 text-center">{image.name}</p>}
          <button
            onClick={handleSearch}
            className="w-full mt-2 bg-pastel-green text-white font-semibold py-2 rounded-lg hover:bg-green-500 transition-all duration-200"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      )}
    </div>
  );
}
