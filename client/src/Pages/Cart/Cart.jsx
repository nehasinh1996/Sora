import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../Context/StoreContext"; // ✅ Zustand store import kiya

const Cart = () => {
  const navigate = useNavigate();
  const { cart = [], getTotalCartAmount, removeFromCart } = useStore();

  // 🛠️ Memoized total calculation with 2 decimal places fix
  const totalAmount = useMemo(() => getTotalCartAmount().toFixed(2), [cart]);

  return (
    <div className="fixed top-0 right-0 w-[400px] h-full bg-white shadow-2xl p-6 overflow-y-auto z-50">
      <div className="flex justify-between items-center border-b pb-3">
        <h1 className="text-2xl font-semibold">Your cart</h1>
        <button className="text-xl font-bold" onClick={() => navigate(-1)}>✖</button>
      </div>

      {cart.length > 0 ? (
        <div className="space-y-6 mt-4">
          {cart.map((item) =>
            item?._id ? (
              <div key={item._id} className="flex items-center gap-4 border-b pb-3">
                {/* 🖼️ Image */}
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={item.image || item.image_link || "/fallback-image.png"}
                  alt={item.name || "Product Image"}
                  onError={(e) => (e.currentTarget.src = "/fallback-image.png")}
                />
                {/* 📦 Product Details */}
                <div className="flex-1">
                  <h2 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h2>
                  <p className="text-xs text-gray-500">₹{item.price.toFixed(2)} × {item.quantity || 1}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button className="border px-2 py-1" onClick={() => removeFromCart(item._id)}>−</button>
                    <span>{item.quantity}</span>
                    <button className="border px-2 py-1">+</button>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-800">₹{(item.price * (item.quantity || 1)).toFixed(2)}</p>
              </div>
            ) : null
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Your cart is empty...</p>
      )}

      {/* 🏷️ Total Section */}
      {cart.length > 0 && (
        <>
          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold">Estimated total</h2>
            <p className="text-2xl font-bold text-gray-900">₹{totalAmount}</p>
            <p className="text-xs text-gray-500">Tax included and shipping calculated at checkout.</p>
          </div>

          {/* 🛍 Checkout Button */}
          <button
            className="w-full mt-4 bg-black text-white py-3 rounded-lg font-medium text-sm shadow-md hover:bg-gray-800 transition"
            onClick={() => navigate("/Order")}
          >
            BUY NOW →
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
