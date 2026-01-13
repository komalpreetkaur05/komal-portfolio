"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import styles from './testimonials.module.css'; 

interface Testimonial {
  id: number;
  name: string;
  company?: string;
  role?: string;
  email?: string;
  message: string;
  createdAt: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      if (!response.ok) throw new Error('Failed to fetch testimonials.');
      const data = await response.json();
      setTestimonials(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      setError('Please fill in your name and a message.');
      return;
    }
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, role, email, message }),
      });

      if (!response.ok) throw new Error('Failed to submit testimonial.');

      // Refresh testimonials and clear form
      await fetchTestimonials();
      setName('');
      setCompany('');
      setRole('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Testimonials</h1>
        <p className={styles.pageSubtitle}>
          See what others are saying and share your own experience.
        </p>

        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Share Your Experience</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              disabled={submitting}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={styles.input}
              disabled={submitting}
            />
            <input
              type="text"
              placeholder="Your Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.input}
              disabled={submitting}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              disabled={submitting}
            />
            <textarea
              placeholder="Share your thoughts..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              rows={5}
              disabled={submitting}
            />
            {error && <p className={styles.errorText}>{error}</p>}
            <button type="submit" className={styles.submitButton} disabled={submitting}>
              {submitting ? 'Submitting Feedback...' : 'Submit Your Feedback'}
            </button>
          </form>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <p className={styles.testimonialMessage}>"{t.message}"</p>
              <p className={styles.testimonialAuthor}>- {t.name}{t.company && `, ${t.company}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
