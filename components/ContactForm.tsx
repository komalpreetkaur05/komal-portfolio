export default function ContactForm() {
  return (
    <form
      style={{
        display: "grid",
        gap: "10px",
        maxWidth: "400px",
        marginTop: "20px",
      }}
    >
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Message" rows={4}></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
}
