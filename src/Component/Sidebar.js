import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar () {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>learn.brosky</h2>
      <p className={styles.university}>Nolan University</p>
      <nav className={styles.menu}>
        <a href="#" className={`${styles.menuItem} ${styles.active}`}>Overview</a>
        <a href="#" className={styles.menuItem}>Courses</a>
        <a href="#" className={styles.menuItem}>Assignments</a>
        <a href="#" className={styles.menuItem}>Kanban Board</a>
        <a href="#" className={styles.menuItem}>Messages</a>
      </nav>
      <div className={styles.certification}>
        <h3>Pro Certification!</h3>
        <p>Get a verified certification from the other university.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Sidebar;
