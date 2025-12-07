"use client"
import React from 'react';
import styles from './ProjectCard.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.techContainer}>
        {project.tech.map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.linksContainer}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
            View Project
          </a>
        )}
        
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.button} style={{ color: "#667eea", borderColor: "#667eea" }}>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const realProjects: Project[] = [
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