import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ user }) => {
  // Default data based on your screenshot
  const userData = user || {
    name: "Nodir Aliev",
    role: "Ishchi",
    birthDate: "1994.06.21",
    phone: "+99895 200 01 01",
    address: "Shodlik MFY bobur ko'cha 22"
  };

  return (
    <div className="user-info-container">
      <div className="profile-header">
        <div className="avatar-circle">
          <i className="fas fa-user"></i> {/* Replace with an <img> if available */}
        </div>
        <h2 className="user-name">{userData.name}</h2>
      </div>

      <div className="details-grid">
        <div className="detail-row">
          <span className="label">Lavozimi</span>
          <span className="value">{userData.role}</span>
        </div>
        <div className="detail-row">
          <span className="label">Tugilgan sana</span>
          <span className="value">{userData.birthDate}</span>
        </div>
        <div className="detail-row">
          <span className="label">Telefon raqam:</span>
          <span className="value">{userData.phone}</span>
        </div>
        <div className="detail-row">
          <span className="label">Manzili:</span>
          <span className="value">{userData.address}</span>
        </div>
      </div>

      <button className="edit-button">
        Ma'lumot o'zgartirish
      </button>
    </div>
  );
};

export default UserInfo;