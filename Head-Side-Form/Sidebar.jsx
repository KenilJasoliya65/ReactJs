import React from 'react';
import './Sidebar.css';

export const Sidebar = () =>  {
  return (
    <nav className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}

// export default Sidebar;
