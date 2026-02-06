import React from 'react';
import './Ombor.scss';

const summaryData = [
  { title: "Ombor operatsiyalari", icon: "⚙️", jami: "1 429", active: false },
  { title: "Urug'lar", icon: "🌱", xozirgilar: "1 429", oldingi: "1 429", active: true },
  { title: "Og'itlar", icon: "🧪", xozirgilar: "1 429", oldingi: "1 429", active: false },
  { title: "O'simliklarni himoya qilish vositalari", icon: "🛡️", xozirgilar: "1 429", oldingi: "1 429", active: false },
  { title: "Boshqa", icon: "📦", xozirgilar: "1 429", oldingi: "1 429", active: false },
];

const inventoryData = [
  { name: "Mosh", type: "mosh", code: "C1", amount: "1 429 kg" },
  { name: "Mosh", type: "mosh", code: "F2", amount: "1 429 kg" },
  { name: "Makkajo'xori", type: "makkajoxori", code: "F2", amount: "1 429 kg" },
  { name: "Bug'doy", type: "bugdoy", code: "F2", amount: "1 429 kg" },
  { name: "Bug'doy", type: "bugdoy", code: "F2", amount: "1 429 kg" },
  { name: "Paxta", type: "paxta", code: "F2", amount: "1 429 kg" },
];

const Ombor = () => {
  return (
    <div className="ombor-container">
      {/* Top Summary Section */}
      <div className="summary-grid">
        {summaryData.map((item, index) => (
          <div key={index} className={`summary-card ${item.active ? 'active' : ''}`}>
            <div className="card-header">
              <span className="icon-wrapper">{item.icon}</span>
              <h4>{item.title}</h4>
            </div>
            <div className="card-body">
              {item.jami ? (
                <div className="stat-group">
                  <label>Jami</label>
                  <p className="large-val">{item.jami}</p>
                </div>
              ) : (
                <div className="stat-split">
                  <div className="stat-group">
                    <label>Xozirgilar</label>
                    <p>{item.xozirgilar}</p>
                  </div>
                  <div className="stat-group">
                    <label>Oldingi</label>
                    <p>{item.oldingi}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Filter Toolbar */}
      <div className="toolbar">
        <div className="left">
          <h3>Urug'lar</h3>
          <button className="add-btn"><span>+</span> Qo'shish</button>
        </div>
        <div className="right">
          <select><option>Urug'lar</option></select>
          <select><option>Urug' turi</option></select>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="inventory-grid">
        {inventoryData.map((item, index) => (
          <div key={index} className={`inventory-card bg-${item.type}`}>
            <div className="card-top">
              <span className="name">{item.name}</span>
              <span className="code">{item.code}</span>
            </div>
            <div className="card-bottom">
              <label>Jami</label>
              <p>{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ombor;