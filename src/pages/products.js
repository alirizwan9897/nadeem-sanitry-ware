"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CART_STORAGE_KEY = "glanza-cart";

const products = [
  {
    id: 1,
    name: "Ceramic Wash Basin",
    price: 2500,
    image: "/images/wash-basin.jpg",
  },
  {
    id: 2,
    name: "Wall Mounted Toilet",
    price: 4500,
    image: "/images/toilet.jpg",
  },
  {
    id: 3,
    name: "Luxury Bathtub",
    price: 12000,
    image: "/images/bathtub.jpg",
  },
  {
    id: 4,
    name: "Chrome Faucet",
    price: 1500,
    image: "/images/faucet.jpg",
  },
];

export default function Home() {

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

  // Add To Cart Function
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart! Go to cart to view or buy.`);
  };

  // Buy Now Function
  const buyNow = (product) => {
    alert(`Proceeding to buy ${product.name}`);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="products">

      <div className="products-headline">
        <h1>Our Products</h1>
        <div className="cart-button-row">
          <span>Cart Items: {cart.length}</span>
          <Link href="/cart" className="goto-cart-btn">
            Go to Cart
          </Link>
        </div>
      </div>

      <div className="product-grid">

        {products.map((product) => (
          <div className="card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <div className="card-body">

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              {/* Buttons */}
              <div className="btn-group">

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                <button
                  className="buy-btn"
                  onClick={() => buyNow(product)}
                >
                  Buy Now
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}