"use client"
import React from 'react';

const ProjectCard = ({ project }) => {
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
      <h3 style={{
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#333",
        marginBottom: "15px"
      }}>
        {project.title}
      </h3>

      <p style={{
        fontSize: "1rem",
        color: "#666",
        lineHeight: "1.7",
        marginBottom: "20px",
        flex: 1
      }}>
        {project.description}
      </p>

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
};

export default function ProjectsPage() {
  const realProjects = [
    {
      id: 1,
      title: "SafeSpace App",
      description: "A comprehensive mental health platform designed to provide support, resources, and community for users seeking mental wellness. Features include anonymous support forums, mental health resources, crisis intervention tools, and personalized wellness tracking.",
      tech: ["React", "Node.js", "Convex", "Prisma"],
      github: "https://github.com/komalpreetkaur05/SafeSpaceApp"
    },
    {
      id: 2,
      title: "BudgetWise",
      description: "A full-stack financial management web application that helps users track expenses, create budgets, and visualize spending patterns. Built with modern web technologies to provide real-time budget monitoring and financial insights.",
      tech: ["JavaScript", "HTML/CSS", "Node.js", "React", "Chart.js"],
      github: "https://github.com/komalpreetkaur05/WebDev2budgetwise"
    },
    {
      id: 3,
      title: "Nutritional Insights Project",
      description: "An advanced nutrition analysis application that provides detailed insights into food nutritional values. Features include meal tracking, calorie counting, macronutrient breakdown, and personalized nutrition recommendations based on dietary goals.",
      tech: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
      github: "https://github.com/komalpreetkaur05/Nutritional_Insights_Project2"
    },
    {
      id: 4,
      title: "Java Mentor",
      description: "An educational platform designed to help students learn Java programming through interactive tutorials, code examples, and mentorship features. Includes practice problems, code review tools, and progress tracking for learners.",
      tech: ["Java", "Firebase", "Firestore", "Gemini"],
      github: "https://github.com/komalpreetkaur05/java-mentor"
    },
    {
      id: 5,
      title: "FitMindAI App",
      description: "An AI-powered fitness and wellness application (collaborative project) that combines physical fitness tracking with mental wellness features. Provides personalized workout plans, meditation guidance, and holistic health insights using artificial intelligence.",
      tech: ["React Native", "AI/ML", "Firebase", "TensorFlow"],
      github: "https://github.com/RhailynJane/FitMindAI_App"
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8f9fa",
      padding: "60px 20px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: "700",
          color: "#333",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          My Projects
        </h1>
        
        <p style={{
          fontSize: "1.2rem",
          color: "#666",
          textAlign: "center",
          marginBottom: "50px",
          lineHeight: "1.6",
          maxWidth: "700px",
          margin: "0 auto 50px"
        }}>
          Here are some of the projects I've worked on, showcasing my skills in full-stack development, mobile apps, and web technologies.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "30px"
        }}>
          {realProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}