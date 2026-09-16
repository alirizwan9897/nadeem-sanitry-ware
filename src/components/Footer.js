export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2>🍗 Crispy Chicken Corner</h2>
          <p>
            Authentic and delicious fried chicken with premium quality
            ingredients. Fresh, flavorful, and perfect for every occasion!
          </p>
        </div>
        {/* Address */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>Food Court, Downtown Junction</p>
          <p>Moradabad, Uttar Pradesh, India</p>
        </div>
        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@crispychickencorner.com</p>
          <p>Mobile: +91 9876543210</p>
        </div>
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>About Us</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Crispy Chicken Corner. All Rights Reserved.</p>
      </div>
    </footer>
  );
}