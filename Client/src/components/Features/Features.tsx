import React from 'react';
import styles from './Features.module.css';

const featureItems = [
  { 
    image: '/bus_open_door_look_inside.jpeg', 
    title: 'WELCOMING ENTRANCE'
  },
  { 
    image: '/enoug_leg_room.jpeg', 
    title: 'SPACIOUS LEGROOM'
  },
  { 
    image: '/starry_ceiling.jpeg', 
    title: 'AMBIENT LIGHTING'
  },
  { 
    image: '/seats_side_view.jpeg', 
    title: 'LUXURY SEATING'
  },
  { 
    image: '/seats_above.jpeg', 
    title: 'PREMIUM INTERIOR'
  },
  { 
    image: '/bus_front.png', 
    title: 'MODERN FLEET'
  },
  { 
    image: '/bus_front_left.png', 
    title: 'ELEGANT DESIGN'
  },
  { 
    image: '/bus_rear_left.png', 
    title: 'COMFORT & STYLE'
  },
  { 
    image: '/bus_rear_right.png', 
    title: 'LUXURY TRANSPORT'
  }
];

const Features: React.FC = () => {
  return (
    <section className={styles.featuresWrapper}>
      <div className={styles.features}>
        {/* First set of cards */}
        {featureItems.map((feature, index) => (
          <div key={`card-1-${index}`} className={styles.featureCard}>
            <div className={styles.imageContainer}>
              <img src={feature.image} alt={feature.title} className={styles.featureImage} />
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {featureItems.map((feature, index) => (
          <div key={`card-2-${index}`} className={styles.featureCard}>
            <div className={styles.imageContainer}>
              <img src={feature.image} alt={feature.title} className={styles.featureImage} />
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 