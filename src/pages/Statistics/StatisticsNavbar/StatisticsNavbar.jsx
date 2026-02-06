import React, { useState } from 'react';
import './StatisticsNavbar.scss';
import StatisticsNavbar_img1 from './StatisticsNavbar_imgs/agro App 1 (1).png'
import StatisticsNavbar_img2 from './StatisticsNavbar_imgs/icons8-menu-48.png'
// Note: You can use react-icons or your own SVG assets
import {
  MdDashboard,
  MdMap,
  MdStore,
  MdAgriculture,
  MdEngineering
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const StatisticsNavbar = () => {
  const menuItems = [
    { id: 1, linking: "/statistics/monitoring", title: 'Monitoring', icon: <MdDashboard />, active: true },
    { id: 2, linking: "/statistics/yermaydonlari", title: 'Yer maydonlari', icon: <MdMap />, active: true },
    { id: 3, linking: "/statistics/ombor", title: 'Ombor', icon: <MdStore />, active: true },
    { id: 4, linking: "/statistics/fermerxojaligi", title: 'Fermer xo’jalig', icon: <MdAgriculture />, active: true },
    { id: 5, linking: "/statistics/ishjarayonlari", title: 'Ish jarayonlari', icon: <MdEngineering />, active: true },
  ];

  return (
    <nav className='statistics-navbar'>
      <div className="navbar-logo">
        <img src={StatisticsNavbar_img1} alt="Agro App" />
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <NavLink className="nav_panel" to={item.linking}>
            <li
              key={item.id}
              // className={`nav-item ${item.active ? 'active' : ''}`}
              className={`nav-item`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.title}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default StatisticsNavbar;