import React from 'react';
import './Monitoring.scss';
import Monitoring_imgs1 from './Monitoring_imgs/Vector (5).png'
import Monitoring_imgs2 from './Monitoring_imgs/Group.png'
import Monitoring_imgs3 from './Monitoring_imgs/Group (1).png'
import Monitoring_imgs4 from './Monitoring_imgs/Frame.png'
import Monitoring_imgs5 from './Monitoring_imgs/Water.png'
import Monitoring_imgs6 from './Monitoring_imgs/Precipitation.png'
import Monitoring_imgs7 from './Monitoring_imgs/ember1368.png'
import Monitoring_imgs8 from './Monitoring_imgs/ember1370.png'
const Monitoring = () => {
  return (
    <div className="monitoring-dashboard">
      <div className="dashboard-grid">

        {/* Rejalar Card */}
        <div className="card rejalar">
          <h3>Rejalar</h3>
          <div className="error-alert">
            Hisobotni ko'rsatish uchun ish jurnali va ish varaqlarini to'ldiring
          </div>
        </div>

        {/* Ekin tuzilishi Card */}
        <div className="card ekin-tuzilishi">
          <h3>Ekin tuzilishi</h3>
          <div className="stats">
            <div className="stat-item">
              <span className="label">Rejada</span>
              <span className="value">4331.7 <small>gektar</small></span>
            </div>
            <div className="stat-item">
              <span className="label">Rejada</span>
              <span className="value">5</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="segment mosh" style={{ width: '20%' }}></div>
              <div className="segment makkajoxori" style={{ width: '15%' }}></div>
              <div className="segment bugdoy" style={{ width: '25%' }}></div>
              <div className="segment paxta" style={{ width: '40%' }}></div>
            </div>
            <div className="legend">
              <span><i className="dot mosh"></i> Mosh</span>
              <span><i className="dot makkajoxori"></i> Makkajo'xori</span>
              <span><i className="dot bugdoy"></i> Bug'doy</span>
              <span><i className="dot paxta"></i> Paxta</span>
            </div>
          </div>
        </div>

        {/* Ob-havo Card */}
        <div className="card ob-havo">
          <h3>Ob-havo</h3>
          <div className="current-weather">
            <p className="date">13 dekabr, seshanba</p>
            <div className="weather-main">
              <span className="temp">-2 <small>°C</small></span>
              <div className="weather-icons">
                {/* Simplified weather icons placeholders */}
                <span>66%</span> <span>0 мм</span> <span>9 м/с</span>
              </div>
            </div>
          </div>
          <ul className="weather-forecast">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="forecast">
                <li>
                  <span>13 dekabr, seshanba</span>
                  <span className="temp-range"><img src={Monitoring_imgs3} alt="" />-4 ... -2 °C</span>
                </li>
                <div className="forecast_cards">
                  <span className='big_span'><img src={Monitoring_imgs4} alt="" />-2<small>°C</small></span>
                  <span><img src={Monitoring_imgs5} alt="" />66%</span>
                  <span><img src={Monitoring_imgs6} alt="" />0 мм</span>
                  <span><img src={Monitoring_imgs7} alt="" />—</span>
                  <span><img src={Monitoring_imgs8} alt="" />9 м/с</span>
                </div>
              </div>
            ))}
          </ul>
        </div>

        {/* Faol harorat yig'indisi Card */}
        <div className="card temperature-sum">
          <h3>Faol harorat yig'indisi</h3>
          <p className="label">Rejada</p>
          <p className="total-temp">36.46 <small>°C</small></p>
          <div className="mini-chart-placeholder">
            <img src={Monitoring_imgs1} alt="" />
            <img className='mini_chart_img' src={Monitoring_imgs2} alt="" />
            {/* You would insert an Area Chart component here */}
            <div className="chart-bg"></div>
          </div>
        </div>

        {/* Uy xo'jaligi xarajatlari Card */}
        <div className="card costs">
          <h3>Uy xo'jaligi xarajatlari</h3>
          <p className="label">Jami</p>
          <p className="total-cost">0 <small>$</small></p>
        </div>

      </div>
    </div>
  );
};

export default Monitoring;