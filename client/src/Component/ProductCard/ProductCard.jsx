import { useState } from "react";
import { Heart, Plus, Minus } from "lucide-react";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => setQuantity(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 0);

  return (
    <div className="flex justify-center">
      <div className="rounded-2xl transition-all duration-300 cursor-pointer w-full sm:w-[260px] bg-white hover:shadow-lg hover:scale-105 flex flex-col relative mx-auto overflow-hidden">
        
        {/* 🔹 Image & Wishlist Button */}
        <div className="relative h-[200px]">  {/* Reduced height */}
          <img
            src={product.image_link}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-2 right-2 p-1 rounded-full cursor-pointer hover:scale-110 transition-all"
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>

        {/* 🔹 Product Details */}
        <div className="p-3 text-start space-y-1">  {/* Reduced padding and spacing */}
          <p className="text-xs font-semibold text-gray-500 uppercase">{product.category}</p>
          <h2 className="text-sm font-semibold text-gray-800">{product.name}</h2>  {/* Smaller font */}
          <p className="text-xs text-gray-600 h-10 overflow-hidden">{product.description}</p>  {/* Reduced height */}
          <p className="text-sm font-bold">Rs. <span className="text-black">{product.price}</span></p>

          {/* 🔹 Quantity Controls & Add to Cart */}
          {quantity === 0 ? (
            <button
              className="bg-black text-white px-3 py-3 text-xs rounded-lg cursor-pointer hover:bg-gray-700 transition-all w-full"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          ) : (
            <div className="flex items-center justify-between border rounded-lg p-1 w-full bg-gray-100">
              <button className="text-gray-600 px-1 hover:text-black" onClick={decreaseQuantity}>
                <Minus size={16} />
              </button>
              <span className="text-sm font-semibold">{quantity}</span>
              <button className="text-gray-600 px-1 hover:text-black" onClick={increaseQuantity}>
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
