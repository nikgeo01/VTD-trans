import React from 'react';
import styles from './History.module.css';

const History = () => {
  const achievements = [
    {
      number: "5",
      label: "Years of Experience",
      suffix: "+"
    },
    {
      number: "132",
      label: "Happy Customers",
      suffix: "+"
    },
    {
      number: "74",
      label: "Rides Finished",
      suffix: "+"
    }
  ];

  return (
    <section className={styles.history}>
      <div className={styles.content}>
        <h2 className={styles.title}>OUR HISTORY</h2>
        <p className={styles.subtitle}>A journey of excellence and trusted service</p>
        
        <div className={styles.statsContainer}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.number}>
                {achievement.number}
                <span className={styles.suffix}>{achievement.suffix}</span>
              </div>
              <div className={styles.label}>{achievement.label}</div>
            </div>
          ))}
        </div>
        
        <p className={styles.growingText}>And counting...</p>
      </div>
    </section>
  );
};

export default History; 