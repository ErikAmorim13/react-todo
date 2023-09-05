import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inicio">Início</Link>
        </li>
        <li>
          <Link to="/top-global">Top Global</Link>
        </li>
        <li>
          <Link to="/novidades">Novidades</Link>
        </li>
        <li>
          <Link to="/norepeat">No Repeat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
