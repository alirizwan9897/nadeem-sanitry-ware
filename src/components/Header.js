import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchInput)}`);
    } else {
      router.push('/products');
    }
  };

  const handleClear = () => {
    setSearchInput('');
    router.push('/products');
  };

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

        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search the store"
            className="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" style={{ padding: '8px 16px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
            Search
          </button>
          <button type="button" onClick={handleClear} style={{ padding: '8px 16px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
            Clear
          </button>
        </form>

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
