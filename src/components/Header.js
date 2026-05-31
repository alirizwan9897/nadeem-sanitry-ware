import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="navbar">
        <div className="logo">GLANZA</div>

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

      <div className="menu">
        <Link href="/products">Home</Link>
        <Link href="/products">All Collections</Link>
        <Link href="/products?category=Sanitary%20Ware">Sanitary Ware</Link>
        <Link href="/products?category=Faucets">Faucets</Link>
        <Link href="/products?category=Luxury">Luxury Collection</Link>
        <Link href="/about">About Us</Link>
      </div>
    </>
  );
}
