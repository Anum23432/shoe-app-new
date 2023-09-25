// CartContext.js
import React, { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const saveCartToLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    saveCartToLocalStorage(updatedCartItems);
  };
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    saveCartToLocalStorage([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
