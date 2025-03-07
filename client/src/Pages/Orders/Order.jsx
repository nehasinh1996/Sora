import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../Context/StoreContext";

const Order = () => {
  const navigate = useNavigate();
  const { cart, getTotalCartAmount } = useStore();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/thank-you");
  };

  const subtotal = getTotalCartAmount();
  const discount = subtotal * 0.2;
  const total = subtotal - discount;

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <input type="text" name="state" placeholder="State" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <input type="text" name="zip" placeholder="Zip Code" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border rounded mb-4" />
          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-700">Pay Now</button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cart.length > 0 ? (
          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center gap-4 border-b pb-2">
                <img className="w-14 h-14 object-cover rounded-md" src={item.image || "/fallback-image.png"} alt={item.name} />
                <div className="flex-1">
                  <h2 className="text-sm font-medium">{item.name}</h2>
                  <p className="text-xs text-gray-500">₹{item.price} × {item.quantity || 1}</p>
                </div>
                <p className="text-sm font-semibold">₹{item.price * (item.quantity || 1)}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty...</p>
        )}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-green-600">
            <p>Order Discount (20%)</p>
            <p>- ₹{discount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>₹{total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
