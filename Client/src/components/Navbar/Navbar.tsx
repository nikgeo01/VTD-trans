import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo-removebg-preview.png" alt="Logo" className={styles.logoImage} width="40" height="40" />
      </div>
      
      <button className={styles.burgerMenu} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ''}`}></span>
      </button>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <a href="#" className={styles.navLink}>Reserve</a>
        <a href="#" className={styles.navLink}>Services</a>
        <a href="#" className={styles.navLink}>About Us</a>
        <a href="#" className={styles.navLink}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 