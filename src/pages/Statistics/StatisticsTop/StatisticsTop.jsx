import React from 'react';
import './StatisticsTop.scss';
import { MdAddCircleOutline, MdNotificationsNone, MdKeyboardArrowDown } from 'react-icons/md';

const StatisticsTop = () => {
  return (
    <header className="statistics-top">
      <div className="top-left-section">
        {/* Qoshish (Add) Button */}
        <div className="action-item add-action">
          <MdAddCircleOutline className="icon" />
          <span>Qo'shish</span>
        </div>

        {/* Mavsumlar (Seasons) Dropdown */}
        <div className="action-item season-selector">
          <div className="label">Mavsumlar</div>
          <select className='hello_world123' name="" id="">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>

      <div className="top-right-section">
        {/* Notification Bell */}
        <div className="notification-wrapper">
          <MdNotificationsNone className="notification-icon" />
          <span className="badge">0</span>
        </div>

        {/* User Profile Avatar */}
        <div className="user-profile">
          <div className="avatar-placeholder">
            {/* Using an SVG or Icon to match the green circular profile */}
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="#008744" strokeWidth="2"/>
              <path d="M16 16C18.7614 16 21 13.7614 21 11C21 8.23858 18.7614 6 16 6C13.2386 6 11 8.23858 11 11C11 13.7614 13.2386 16 16 16Z" fill="#008744"/>
              <path d="M7 25C7 21.134 11.0294 18 16 18C20.9706 18 25 21.134 25 25" stroke="#008744" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StatisticsTop;