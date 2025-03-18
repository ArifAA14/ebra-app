import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === item.id);
          let updatedCart;

          if (existingItem) {
            updatedCart = state.cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
          } else {
            updatedCart = [...state.cart, { ...item, quantity: 1 }];
          }

          return {
            cart: updatedCart,
            totalItems: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
            totalPrice: updatedCart.reduce((sum, i) => sum + i.price * i.quantity, 0),
          };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const updatedCart = state.cart.filter((i) => i.id !== id);
          return {
            cart: updatedCart,
            totalItems: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
            totalPrice: updatedCart.reduce((sum, i) => sum + i.price * i.quantity, 0),
          };
        }),

      clearCart: () => set({ cart: [], totalItems: 0, totalPrice: 0 }),
    }),
    { name: "cart-storage" }
  )
);
