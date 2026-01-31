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
  const [poplog, Setpoplog] = useState(true)
  const handleclick404 = () => {
    Setpoplog(!poplog)
  }
  const menuItems = [
    { id: 1, linking: "/statistics/monitoring", title: 'Monitoring', icon: <MdDashboard />, active: true },
    { id: 2, linking: "/statistics/yermaydonlari", title: 'Yer maydonlari', icon: <MdMap />, active: false },
    { id: 3, linking: "/statistics/ombor", title: 'Ombor', icon: <MdStore />, active: false },
    { id: 4, linking: "/statistics/fermerxojaligi", title: 'Fermer xo’jalig', icon: <MdAgriculture />, active: false },
    { id: 5, linking: "/statistics/ishjarayonlari", title: 'Ish jarayonlari', icon: <MdEngineering />, active: false },
  ];

  return (
    <div className="statistics-navbar_all">
      <button onClick={handleclick404} className='change_icon'><img src={StatisticsNavbar_img2} alt="" /></button>
      <nav className={poplog ? 'statistics-navbar' : 'statistics-navbar not_allowed'}>
        <div className="navbar-logo">
          <img src={StatisticsNavbar_img1} alt="Agro App" />
        </div>

        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text"><NavLink to={item.linking}>{item.title}</NavLink></span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default StatisticsNavbar;