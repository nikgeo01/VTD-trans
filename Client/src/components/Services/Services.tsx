import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: "Professional Driver",
      description: "Experienced, multilingual chauffeurs providing exceptional service with the highest standards of professionalism and discretion."
    },
    {
      title: "European Travel",
      description: "Seamless cross-border transportation services throughout Europe, ensuring comfortable and luxurious long-distance journeys."
    },
    {
      title: "Anywhere Transport",
      description: "Door-to-door service to any destination of your choice, whether it's airports, events, business meetings, or tourist attractions."
    },
    {
      title: "Flexible Vehicle Rental",
      description: "Rent our premium vehicles with or without a driver for any duration - hourly, daily, or extended periods to suit your needs."
    }
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.mainTitle}>SERVICES</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 