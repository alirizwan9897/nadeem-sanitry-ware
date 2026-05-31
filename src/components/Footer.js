export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>Nadeem Traders</h2>
          <p>
            Premium Sanitary Ware & Bath Fittings Store with
            modern bathroom accessories and luxury collections.
          </p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>Dalpatpur, Moradabad</p>
          <p>Uttar Pradesh, India</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: nadeemtraders@gmail.com</p>
          <p>Mobile: +91 9876543210</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>About Us</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Nadeem Traders. All Rights Reserved.</p>
      </div>
    </footer>
  );
}