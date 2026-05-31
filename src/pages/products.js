"use client";

import { useState } from "react";

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

  // Add To Cart Function
  const addToCart = (product) => {
    setCart([...cart, product]);

    alert(`${product.name} added to cart`);
  };

  // Buy Now Function
  const buyNow = (product) => {
    alert(`Proceeding to buy ${product.name}`);
  };

  return (
    <div className="products">

      <h1>Our Products</h1>

      {/* Cart Count */}
      <h2>Cart Items: {cart.length}</h2>

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