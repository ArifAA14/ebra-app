/* eslint-disable @typescript-eslint/no-unused-vars */
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
   image: string;
   rating: {
     rate: number;
     count: number;
   }
 }

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;

};