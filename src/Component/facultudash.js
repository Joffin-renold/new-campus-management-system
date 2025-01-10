import React from "react";
import "./FDashboard.css"; // Importing CSS for styles

function Facultudash() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Nolan University</h2>
        </div>
        <nav>
          <ul>
            <li>Overview</li>
            <li>My Courses</li>
            <li>Assignments</li>
            <li>Schedule</li>
            <li>Messages</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Good Morning, Prof. Cecilia Funi</h1>
          <span>🌤️</span>
        </header>

        {/* Summary Cards */}
        <section className="summary-cards">
          <div className="card">
            <h3>Total Courses Taught</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Assignments Created</h3>
            <p>30</p>
          </div>
          <div className="card">
            <h3>Meetings Scheduled</h3>
            <p>8</p>
          </div>
        </section>

        {/* Teaching Courses */}
        <section className="teaching-courses">
          <h2>Courses You're Teaching</h2>
          <div className="course-card">
            <h3>Advanced UI Design</h3>
            <p>Enrolled Students: 45</p>
          </div>
          <div className="course-card">
            <h3>Introduction to Web Development</h3>
            <p>Enrolled Students: 60</p>
          </div>
          <div className="course-card">
            <h3>Data Structures and Algorithms</h3>
            <p>Enrolled Students: 50</p>
          </div>
        </section>

        {/* Assignments */}
        <section className="assignments">
          <h2>Assignments to Review</h2>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Assignment</th>
                <th>Due Date</th>
                <th>Pending Submissions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Advanced UI Design</td>
                <td>Wireframe Project</td>
                <td>Mon, 15 Jan</td>
                <td>10</td>
                <td>
                  <button>Review</button>
                </td>
              </tr>
              <tr>
                <td>Introduction to Web Development</td>
                <td>Responsive Design</td>
                <td>Wed, 17 Jan</td>
                <td>5</td>
                <td>
                  <button>Review</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* Profile Sidebar */}
      <aside className="profile-sidebar">
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="profile-pic"
          />
          <h3>Prof. Cecilia Funi</h3>
          <p>@ceciliafuni</p>
          <p>Department: Information Systems</p>
          <p>Faculty ID: 12345</p>
          <button>Edit Profile</button>
        </div>
        <div className="calendar">
          <h3>Upcoming Schedule</h3>
          <ul>
            <li>
              <strong>10 Jan:</strong> Faculty Meeting
            </li>
            <li>
              <strong>12 Jan:</strong> Lecture: UI Design
            </li>
            <li>
              <strong>15 Jan:</strong> Review Wireframe Project
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Facultudash;
