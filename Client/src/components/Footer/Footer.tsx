import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo-removebg-preview.png" alt="Logo" width="40" height="40" />
        </div>
        <p className={styles.copyright}>
          © {currentYear} VTD Transport. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 