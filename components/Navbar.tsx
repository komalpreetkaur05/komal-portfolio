// Navbar Component (app/components/Navbar.tsx or similar)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav style={{
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo/Brand */}
      <Link href="/" style={{
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#667eea",
        textDecoration: "none",
        transition: "color 0.3s ease"
      }}
        onMouseEnter={(e) => e.currentTarget.style.color = "#764ba2"}
        onMouseLeave={(e) => e.currentTarget.style.color = "#667eea"}>
        KK
      </Link>

      {/* Desktop Menu */}
      <div style={{
        display: "flex",
        gap: "30px",
        alignItems: "center"
      }}
        className="desktop-menu">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: pathname === link.href ? "#667eea" : "#333",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: pathname === link.href ? "600" : "500",
              position: "relative",
              padding: "5px 0",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#667eea";
            }}
            onMouseLeave={(e) => {
              if (pathname !== link.href) {
                e.currentTarget.style.color = "#333";
              }
            }}>
            {link.label}
            {pathname === link.href && (
              <span style={{
                position: "absolute",
                bottom: "-2px",
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, #667eea, #764ba2)",
                borderRadius: "2px"
              }} />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#667eea"
        }}
        className="mobile-menu-btn">
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "white",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          display: "none"
        }}
          className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "block",
                padding: "15px 0",
                color: pathname === link.href ? "#667eea" : "#333",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: pathname === link.href ? "600" : "500",
                borderBottom: "1px solid #f0f0f0"
              }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}