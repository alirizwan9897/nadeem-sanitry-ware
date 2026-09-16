import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "none",
      borderRadius: "12px",
      padding: "0",
      margin: "1rem",
      width: "250px",
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(212, 100, 43, 0.15)",
      overflow: "hidden",
      backgroundColor: "#fff"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 12px 25px rgba(212, 100, 43, 0.25)";
      e.currentTarget.style.transform = "translateY(-8px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(212, 100, 43, 0.15)";
      e.currentTarget.style.transform = "translateY(0)";
    }}>
      <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          quality={85}
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <h3 style={{ color: "#d4642b", fontWeight: "700", margin: "12px 0 8px 0", fontSize: "18px" }}>{product.name}</h3>
        <p style={{ color: "#666", fontSize: "14px", margin: "8px 0" }}>{product.description}</p>
        <strong style={{ fontSize: "20px", color: "#c85a23" }}>₹{product.price}</strong>
      </div>
    </div>
  );
}
