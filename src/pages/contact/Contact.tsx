import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Page</h1>
      <p>This is the Contact Page.</p>
    </div>
  );
}

export default Contact;