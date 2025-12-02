// Contact Form Component (components/ContactForm.tsx)
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: "white",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginBottom: "20px"
      }}>
        {/* Name Field */}
        <div>
          <label htmlFor="name" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: "#333",
            fontSize: "0.95rem"
          }}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "1rem",
              border: "2px solid #e0e0e0",
              borderRadius: "8px",
              transition: "border-color 0.3s ease",
              outline: "none"
            }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: "#333",
            fontSize: "0.95rem"
          }}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "1rem",
              border: "2px solid #e0e0e0",
              borderRadius: "8px",
              transition: "border-color 0.3s ease",
              outline: "none"
            }}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
          />
        </div>
      </div>

      {/* Subject Field */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="subject" style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: "500",
          color: "#333",
          fontSize: "0.95rem"
        }}>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "1rem",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            transition: "border-color 0.3s ease",
            outline: "none"
          }}
          onFocus={(e) => e.target.style.borderColor = "#667eea"}
          onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
        />
      </div>

      {/* Message Field */}
      <div style={{ marginBottom: "25px" }}>
        <label htmlFor="message" style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: "500",
          color: "#333",
          fontSize: "0.95rem"
        }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "1rem",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            transition: "border-color 0.3s ease",
            outline: "none",
            resize: "vertical",
            fontFamily: "inherit"
          }}
          onFocus={(e) => e.target.style.borderColor = "#667eea"}
          onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          padding: "14px 32px",
          fontSize: "1.1rem",
          fontWeight: "600",
          color: "white",
          background: isSubmitting ? "#999" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          borderRadius: "8px",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
        }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
        }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          background: "#d4edda",
          color: "#155724",
          borderRadius: "8px",
          textAlign: "center"
        }}>
          ✓ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f8d7da",
          color: "#721c24",
          borderRadius: "8px",
          textAlign: "center"
        }}>
          ✗ Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}