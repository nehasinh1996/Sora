import { create } from "zustand";

const useStore = create((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id || item._id === product._id // ✅ Fix: Support both `id` and `_id`
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id || item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId && item._id !== productId), // ✅ Fix: Support `_id`
    })),

  getTotalCartAmount: () =>
    get().cart.reduce((total, item) => total + item.price * item.quantity, 0),

  fetchCart: async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart");
      const data = await response.json();
      set({
        cart: data.map((item) => ({
          ...item,
          id: item.id || item._id, // ✅ Fix: Ensure `id` exists
        })),
      });
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  },
}));

export default useStore;
