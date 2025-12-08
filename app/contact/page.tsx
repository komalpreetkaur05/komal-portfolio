// Contact Page (app/contact/page.tsx)
import ContactForm from "@/components/ContactForm";
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Page Title */}
        <h1 className={styles.pageTitle}>
          Get in Touch
        </h1>

        <p className={styles.pageSubtitle}>
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        {/* Contact Form */}
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>

        {/* Contact Info Cards */}
        <div className={styles.gridContainer}>
          <div className={styles.contactCard}>
            <div className={styles.icon}>📧</div>
            <h3 className={styles.cardTitle}>Email</h3>
            <a href="mailto:komalpreetk1104@gmail.com" className={styles.cardLink}>
              komalpreetk1104@gmail.com
            </a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>💼</div>
            <h3 className={styles.cardTitle}>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/komalpreetkaur1104" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              Connect with me
            </a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}>🔗</div>
            <h3 className={styles.cardTitle}>GitHub</h3>
            <a href="https://github.com/komalpreetkaur05" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              View my work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}