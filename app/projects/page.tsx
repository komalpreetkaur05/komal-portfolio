import ProjectCard from "@/components/ProjectCard";

const mockProjects = [
  {
    id: 1,
    title: "Mock Project 1",
    description: "A sample project showcasing frontend development.",
    tech: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "Mock Project 2",
    description: "Backend API project using Node.js & Express.",
    tech: ["Node.js", "Express"],
  },
];

export default function ProjectsPage() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <h2>My Projects</h2>

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {mockProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
