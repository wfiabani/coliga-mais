import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Page</h1>
      <p>This is the About Page.</p>
    </div>
  );
}

export default About;