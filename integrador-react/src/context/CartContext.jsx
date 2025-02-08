import React, { createContext, useState, useEffect, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems((prevCartItems)=>{
      const existingItem = prevCartItems.find(item => item.idDrink === product.idDrink);
    
    if (existingItem) {
      console.log ('producto existente:', existingItem);
      return prevCartItems.map(item =>
        item.idDrink === product.idDrink
        ? {...item, quantity: item.quantity +1}
      :item
      );
    }else{
      console.log('Producto nuevo:', product);
    return [... prevCartItems, {...product, quantity: 1}];
   }
  });
  };

  useEffect(()=>{
    const storedCart = JSON.parse(localStorage.getItem('cartItems'));
    if(storedCart) setCartItems(storedCart);
  },[]);

  useEffect(()=>{
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  },[cartItems]);

  const incrementQuantity =(productId)=>{
    setCartItems((prevCart) =>
      prevCart.map((item)=>
      item.idDrink === productId ? {...item, quantity: item.quantity +1}:item
      )
    ); 
  };

  const decreaseQuantity =(productId)=>{
    setCartItems((prevCart) =>
      prevCart.map((item) =>
       item.idDrink === productId ? {...item, quantity: Math.max (item.quantity -1 , 1)}: item
      ).filter(item => item.quantity > 0));
  };


  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.idDrink !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const sellCart =() => {
    if (cartItems.length > 0){
      clearCart();
    }
  
  };

  const totalQuantity = useMemo(
    () => cartItems.reduce((sum,item)=> sum + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(()=> cartItems.reduce((sum,item)=> sum + item.quantity * item.price, 0),
  [cartItems]
  );


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, decreaseQuantity,sellCart,incrementQuantity,totalPrice,totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};