import React from 'react';
import styles from './Dashboard.module.css'; // Import the CSS module
import Sidebar from './Sidebar'
// import Sidebar from './Sidebar'
const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <Sidebar/>
      {/* Main Content */}
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Morning, Cecilia Funi</h1>
          <div className={styles.weather}>☁️</div>
          <input type="search" placeholder="Search" className={styles.searchBar} />
          <div className={styles.notificationIcon}>🔔</div>
        </header>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <p>40</p>
            <span>Total courses</span>
          </div>
          <div className={styles.statItem}>
            <p>24</p>
            <span>Total assignments</span>
          </div>
          <div className={styles.statItem}>
            <p>8</p>
            <span>Total quizzes</span>
          </div>
        </div>

        <div className={styles.timeSpends}>
          <h2>Time Spends</h2>
          <div className={styles.timeBars}>
            <div className={`${styles.timeBar} ${styles.orange}`}>2 May</div>
            <div className={`${styles.timeBar} ${styles.blue}`}>3 May</div>
            <div className={`${styles.timeBar} ${styles.green}`}>4 May</div>
          </div>
        </div>

        <div className={styles.activeCourses}>
          <h2>Active Courses</h2>
          <div className={styles.courses}>
            <div className={styles.course}>
              <h3>Course Code</h3>
              <input type="text" placeholder="Enter code" />
              <button>Join Course</button>
            </div>
            <div className={styles.course}>
              <h3>UI Design: From zero to hero</h3>
              <p>19 lessons, 2h 4m</p>
            </div>
            <div className={styles.course}>
              <h3>After Effects: Cheat Sheet</h3>
              <p>19 lessons, 2h 4m</p>
            </div>
          </div>
        </div>

        <div className={styles.assignments}>
          <h2>Your Assignment</h2>
          <table>
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Due Date</th>
                <th>Grade</th>
                <th>Instructor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Logo Design</td>
                <td>Mon, 20 May</td>
                <td>-</td>
                <td>Brody W.</td>
                <td><button>Submit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Profile Section */}
      <aside className={styles.profileSection}>
        <div className={styles.profile}>
          <h3>Cecilia Funi</h3>
          <p>@cecilliafuni</p>
          <div className={styles.details}>
            <p>Years: Class of 2021</p>
            <p>Major: Information Systems</p>
            <p>GPA: 3.98</p>
          </div>
          <button>Edit Profile</button>
        </div>

        <div className={styles.calendar}>
          <h3>May 2024</h3>
          <p>Upcoming Class</p>
          <ul>
            <li>Web Design Master - Offline</li>
            <li>HTML Basic - Online</li>
          </ul>
        </div>

        <div className={styles.todoList}>
          <h3>To-Do List</h3>
          <ul>
            <li>Follow-up for the Mascot</li>
            <li>Finish the Logo Assignment</li>
            <li>Find a team for Web Design</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
