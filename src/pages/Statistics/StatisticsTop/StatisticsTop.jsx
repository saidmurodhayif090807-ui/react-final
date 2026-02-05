import React, { useState } from 'react';
import './StatisticsTop.scss';
import { MdAddCircleOutline, MdNotificationsNone, MdKeyboardArrowDown, MdMap, MdRemoveCircleOutline } from 'react-icons/md';
import { GiSpade } from "react-icons/gi";
import { LuWheat } from "react-icons/lu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Statistics_top_imgs1 from '../Statistics_imgs/icons8-menu-48.png'
import { NavLink } from 'react-router-dom';
const StatisticsTop = (props) => {
  const [statistic_open, setStatistic_open] = useState(false);
  const [statistic2_open, setStatistic2_open] = useState(false);
  const [Sword, setSword] = useState("2022");
  const box_handle_2 = () => {
    setStatistic2_open(!statistic2_open)
  }
  const [statistic2, setStatistic2] = useState("");
  const box_handle_1 = () => {
    setStatistic_open(!statistic_open)
  }
  return (
    <header className="statistics-top">
      <div className="top-left-section">
        <button onClick={props.handleclick404} className='change_icon'>{props.poplog ? <FaChevronDown className='FaChevronDown' /> : <img src={Statistics_top_imgs1} alt="" />}</button>
        {/* Qoshish (Add) Button */}
        <div onClick={box_handle_1} className="action-item add-action">
          {statistic_open ? <MdRemoveCircleOutline className='icon' /> : <MdAddCircleOutline className="icon" />}
          <span>Qo'shish</span>
          <div className={`add_cards ${statistic_open ? "add_cards_true" : ''}`}>
            <FaChevronUp className='icon' />
            <span className='add_extra_card'><GiSpade />Ish</span>
            <span className='add_extra_card'><LuWheat />Ekin</span>
            <span className='add_extra_card'><MdMap />Maydon</span>
          </div>
        </div>

        {/* Mavsumlar (Seasons) Dropdown */}
        <div className="action-item season-selector">
          <div className="label">Mavsumlar</div>
          <h1 className='hello_world123' onClick={box_handle_2}>{Sword}{statistic2_open?<FaChevronUp className='hello_world1234'/>:<FaChevronDown className='hello_world1234' />}</h1>
          {statistic2_open ? <div className="odobli">
            <span onClick={()=>setSword("2022")}>2022</span>
            <span onClick={()=>setSword("2021")}>2021</span>
            <span onClick={()=>setSword("2020")}>2020</span>
            <span onClick={()=>setSword("2019")}>2019</span>
            <span className='hello_world404'><NavLink to={'/statistics/addseason'}>Mavsum qo’shish</NavLink></span>
          </div> : <></>}
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
              <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="#008744" strokeWidth="2" />
              <path d="M16 16C18.7614 16 21 13.7614 21 11C21 8.23858 18.7614 6 16 6C13.2386 6 11 8.23858 11 11C11 13.7614 13.2386 16 16 16Z" fill="#008744" />
              <path d="M7 25C7 21.134 11.0294 18 16 18C20.9706 18 25 21.134 25 25" stroke="#008744" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StatisticsTop;