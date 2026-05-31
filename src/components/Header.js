import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            Menu ☰
          </button>
          <div className="logo">GLANZA</div>
        </div>

        <input
          type="text"
          placeholder="Search the store"
          className="search"
        />

        <div className="nav-icons">
          <Link href="/signin">Sign in</Link>
          <Link href="/enquiry">Enquiry</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </header>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/products">Home</Link>
        <Link href="/products">All Collections</Link>
        <Link href="/products?category=SanitaryWare">Sanitary Ware</Link>
        <Link href="/products?category=Faucets">Faucets</Link>
        <Link href="/products?category=Luxury">Luxury Collection</Link>
        <Link href="/about">About Us</Link>
      </div>
    </>
  );
}
