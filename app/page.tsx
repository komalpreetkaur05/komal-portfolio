export default function HomePage() {
  return (
    <section style={{ padding: "80px 20px" }}>
      <h1>Hello, I’m <span style={{ color: "blue" }}>Your Name</span></h1>
      <p>A passionate software developer building modern web applications.</p>

      <a href="/projects">
        <button style={{ marginTop: "20px" }}>View My Projects</button>
      </a>
    </section>
  );
}
