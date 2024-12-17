import React, { useContext, useEffect, useState } from "react";

import "./Cart.css";
import { CartContext } from "./CartContext";

const Cart = () => {
   const {
     cartItems,
     setCartItems,
     incrementQuantity,
     decrementQuantity,
     removeFromCart,
   } = useContext(CartContext);


  const [total, setTotal] = useState(0);

     useEffect(() => {
       const savedCart = JSON.parse(localStorage.getItem("cartItems"));
       if (savedCart) {
         setCartItems(savedCart);
       }
     }, [setCartItems]);

     useEffect(() => {
       localStorage.setItem("cartItems", JSON.stringify(cartItems));
       calculateTotal();
     }, [cartItems]);

      const calculateTotal = () => {
        const totalValue = cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        setTotal(totalValue);
      };

      const handlePlaceOrder = () => {
        alert("Order placed successfully!");
        setCartItems([]); 
        localStorage.removeItem("cartItems");
      };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
           <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
        
      )}
    </div>
  );
};

export default Cart;
