import React, { useState } from 'react';
import styles from './Reserve.module.css';

const Reserve: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email using your backend service
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.reserve}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={styles.silhouette}></div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>RESERVE</h2>
          <p className={styles.subtitle}>
            We care deeply about your time and experience with us. Our luxury transport service is designed to exceed your expectations, offering unparalleled comfort and sophistication for your journey. Whether it's a special event, corporate travel, or a luxury tour, we ensure every detail is perfected to provide you with an exceptional travel experience.
          </p>
          <button onClick={() => setIsModalOpen(true)} className={styles.reserveButton}>
            Reserve
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h3>Reserve Now</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reserve; 