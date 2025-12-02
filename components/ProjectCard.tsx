// Project Card Component (components/ProjectCard.tsx)
"use client";

type Props = {
  project: {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      padding: "30px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.12)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
    }}>
      {/* Project Title */}
      <h3 style={{
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#333",
        marginBottom: "15px"
      }}>
        {project.title}
      </h3>

      {/* Project Description */}
      <p style={{
        fontSize: "1rem",
        color: "#666",
        lineHeight: "1.7",
        marginBottom: "20px",
        flex: 1
      }}>
        {project.description}
      </p>

      {/* Tech Stack */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "20px"
      }}>
        {project.tech.map((tech) => (
          <span key={tech} style={{
            padding: "6px 14px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: "20px",
            fontSize: "0.85rem",
            fontWeight: "500"
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{
        display: "flex",
        gap: "12px"
      }}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: "10px 20px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "0.95rem",
              fontWeight: "500",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}>
            View Project
          </a>
        )}
        
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: "10px 20px",
              background: "transparent",
              color: "#667eea",
              textDecoration: "none",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "0.95rem",
              fontWeight: "500",
              border: "2px solid #667eea",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#667eea";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#667eea";
            }}>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}