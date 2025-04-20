import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📱",
      text: "+359 899 995950",
      link: "tel:+359899995950"
    },
    {
      icon: "📱",
      text: "+359 877 274160",
      link: "tel:+359877274160"
    },
    {
      icon: "✉️",
      text: "vtdtrans@abv.bg",
      link: "mailto:vtdtrans@abv.bg"
    },
    {
      icon: "👥",
      text: "vtd trans",
      link: "https://facebook.com/vtdtrans"
    }
  ];

  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <h2 className={styles.title}>CONTACT US</h2>
        <div className={styles.contactInfo}>
          {contactInfo.map((info, index) => (
            <a 
              key={index} 
              href={info.link} 
              className={styles.infoItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>{info.icon}</span>
              <span className={styles.text}>{info.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 