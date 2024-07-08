import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

export default Home;