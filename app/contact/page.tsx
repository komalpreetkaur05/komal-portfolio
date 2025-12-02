// Contact Page (app/contact/page.tsx)
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8f9fa",
      padding: "60px 20px"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {/* Page Title */}
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: "700",
          color: "#333",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          Get in Touch
        </h1>
        
        <p style={{
          fontSize: "1.2rem",
          color: "#666",
          textAlign: "center",
          marginBottom: "50px",
          lineHeight: "1.6"
        }}>
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          marginBottom: "50px"
        }}>
          {/* Contact Form */}
          <div style={{
            gridColumn: "1 / -1"
          }}>
            <ContactForm />
          </div>

          {/* Contact Info Cards */}
          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "2.5rem",
              marginBottom: "15px"
            }}>📧</div>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "10px"
            }}>Email</h3>
            <a href="mailto:your.email@example.com" style={{
              color: "#667eea",
              textDecoration: "none",
              fontSize: "1rem"
            }}>
              your.email@example.com
            </a>
          </div>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "2.5rem",
              marginBottom: "15px"
            }}>💼</div>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "10px"
            }}>LinkedIn</h3>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{
              color: "#667eea",
              textDecoration: "none",
              fontSize: "1rem"
            }}>
              Connect with me
            </a>
          </div>

          <div style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "2.5rem",
              marginBottom: "15px"
            }}>🔗</div>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "10px"
            }}>GitHub</h3>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{
              color: "#667eea",
              textDecoration: "none",
              fontSize: "1rem"
            }}>
              View my work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}