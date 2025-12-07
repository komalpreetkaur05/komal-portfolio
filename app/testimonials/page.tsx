"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import styles from './testimonials.module.css'; // Corrected import path

interface Testimonial {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState('');
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
      setError('Please fill in both your name and a message.');
      return;
    }
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) throw new Error('Failed to submit testimonial.');

      // Refresh testimonials and clear form
      await fetchTestimonials();
      setName('');
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
        <h1 className={styles.pageTitle}>Testimonials & Feedback</h1>
        <p className={styles.pageSubtitle}>
          See what others are saying or leave your own feedback about my work.
        </p>

        <div className={styles.formAndTestimonialsGrid}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Leave a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                disabled={submitting}
              />
              <textarea
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
                rows={5}
                disabled={submitting}
              />
              {error && <p className={styles.errorText}>{error}</p>}
              <button type="submit" className={styles.submitButton} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </div>

          <div className={styles.testimonialsList}>
            {testimonials.map((t) => (
              <div key={t.id} className={styles.testimonialCard}>
                <p className={styles.testimonialMessage}>"{t.message}"</p>
                <p className={styles.testimonialAuthor}>- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
