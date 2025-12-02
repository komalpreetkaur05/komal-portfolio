"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated background circles */}
      <div style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        top: "-200px",
        right: "-200px",
        animation: "float 6s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        bottom: "-100px",
        left: "-100px",
        animation: "float 8s ease-in-out infinite reverse"
      }} />

      <div style={{
        maxWidth: "900px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease-out"
      }}>
        {/* Main heading with typing effect look */}
        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: "800",
          marginBottom: "24px",
          lineHeight: "1.2",
          color: "white"
        }}>
          Hello, I'm{" "}
          <span style={{
            background: "linear-gradient(45deg, #ffd700, #ffed4e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
            animation: "glow 2s ease-in-out infinite"
          }}>
            Komalpreet Kaur
          </span>
        </h1>
        
        <p style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          marginBottom: "20px",
          color: "rgba(255, 255, 255, 0.95)",
          fontWeight: "300",
          letterSpacing: "0.5px",
          lineHeight: "1.6"
        }}>
          Full-Stack Software Developer | Building secure, user-centric applications across web, mobile, and desktop platforms.
        </p>

        {/* Skills badges */}
        <div style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "48px",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease-out 0.3s"
        }}>
          {["Web Development", "Mobile Dev", "OOP", "Database Design", "Cloud Computing", "Software Testing"].map((skill, i) => (
            <span key={skill} style={{
              padding: "8px 20px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              borderRadius: "25px",
              fontSize: "0.9rem",
              fontWeight: "500",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              animation: `slideUp 0.6s ease-out ${i * 0.1}s backwards`
            }}>
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease-out 0.5s"
        }}>
          <a href="/projects" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "16px 40px",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#667eea",
              background: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
            }}>
              View My Projects →
            </button>
          </a>

          <a href="/contact" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "16px 40px",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "white",
              background: "transparent",
              border: "2px solid white",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "#667eea";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(0)";
            }}>
              Get in Touch
            </button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: "80px",
          opacity: 0.7,
          animation: "bounce 2s infinite"
        }}>
          <div style={{
            width: "30px",
            height: "50px",
            border: "2px solid white",
            borderRadius: "25px",
            margin: "0 auto",
            position: "relative"
          }}>
            <div style={{
              width: "6px",
              height: "10px",
              background: "white",
              borderRadius: "3px",
              position: "absolute",
              top: "8px",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "scroll 2s infinite"
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6)); }
          50% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.9)); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes scroll {
          0% { opacity: 0; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
        }
      `}</style>
    </section>
  );
}