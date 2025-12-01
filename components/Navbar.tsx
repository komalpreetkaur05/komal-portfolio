import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
