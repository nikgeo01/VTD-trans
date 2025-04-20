import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.titleContainer}>
        <img src="/title-removebg-preview.png" alt="Luxury Transport" className={styles.titleImage} />
      </div>
    </section>
  );
};

export default Hero; 