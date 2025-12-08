// Footer Component (app/components/Footer.tsx or similar)
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: "black",
      color: "white",
      padding: "30px 20px",
      borderTop: "3px solid #667eea"
    }}>
      <div style={{
        textAlign: "center",
        fontSize: "0.9rem",
        opacity: 0.9
      }}>
        © {currentYear} komalpreet Kaur
      </div>
    </footer>
  );
}