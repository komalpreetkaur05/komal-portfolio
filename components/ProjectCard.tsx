type Props = {
  project: {
    title: string;
    description: string;
    tech: string[];
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px" }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul style={{ marginTop: "10px" }}>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
