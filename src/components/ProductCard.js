export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem",
      width: "250px",
      textAlign: "center",
      cursor: "pointer",
      transition: "0.3s",
    }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px" }}
      />
      <h3 style={{ color: "#111827", fontWeight: "700", margin: "12px 0 8px 0" }}>{product.name}</h3>
      <p>{product.description}</p>
      <strong>₹{product.price}</strong>
    </div>
  );
}
