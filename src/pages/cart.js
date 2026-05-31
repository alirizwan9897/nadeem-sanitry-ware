"use client";

import { useEffect, useState } from "react";

const CART_STORAGE_KEY = "glanza-cart";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      setCart(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart, isLoaded]);

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  const buyNow = (product) => {
    alert(`Proceeding to buy ${product.name}`);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="products">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <section className="cart-grid">
            {cart.map((item, index) => (
              <div className="card" key={`${item.id}-${index}`}>
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="btn-group">
                    <button
                      className="buy-btn"
                      onClick={() => buyNow(item)}
                    >
                      Buy Now
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <div className="cart-total">
            <strong>Total:</strong> ₹{totalPrice}
          </div>
        </>
      )}
    </div>
  );
}
