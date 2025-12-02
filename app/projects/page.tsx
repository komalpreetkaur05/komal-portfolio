// Projects Page (app/projects/page.tsx)
import ProjectCard from "@/components/ProjectCard";

const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "Full-stack e-commerce platform with user authentication, shopping cart, and payment integration. Features responsive design and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics. Includes data visualization and progress tracking features.",
    tech: ["React Native", "Firebase", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and deadline tracking. Built with modern web technologies.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts, interactive maps, and historical data visualization using third-party APIs.",
    tech: ["React", "API Integration", "Chart.js"],
    link: "#",
    github: "#"
  }
];

export default function ProjectsPage() {
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
        {/* Page Title */}
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

        {/* Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "30px"
        }}>
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}