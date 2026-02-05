import React from 'react';
import { PlusCircle } from 'lucide-react'; // Using lucide for the icons
import './AddSeason.scss';

const AddSeason = () => {
  // Mock data representing the fields and their seasonal status
  const fields = Array(10).fill({
    name: "Maydon 5",
    seasons: [
      { crop: "Makkajo'xori", value1: "18 ц/Га", value2: "19 ц/Га", status: "Бара" },
      { crop: "Makkajo'xori", value1: "18 ц/Га", value2: "19 ц/Га", status: "Бара" },
    ]
  });

  const totalColumns = 6; // Total season slots shown in the image

  return (
    <div className="season-container">
      <table className="season-table">
        <tbody>
          {fields.map((field, rowIndex) => (
            <tr key={rowIndex} className="season-row">
              {/* Field Info Column */}
              <td className="field-cell">
                <div className="field-content">
                  <div className="field-icon" />
                  <span>{field.name}</span>
                </div>
              </td>

              {/* Season Data/Add Columns */}
              {[...Array(totalColumns)].map((_, colIndex) => {
                const seasonData = field.seasons[colIndex];
                
                return (
                  <td key={colIndex} className="data-cell">
                    {seasonData ? (
                      <div className="crop-info">
                        <div className="crop-header">
                          <span className="dot" />
                          <span className="crop-name">{seasonData.crop}</span>
                        </div>
                        <div className="crop-stats">
                          <span className="val-gray">{seasonData.value1}</span>
                          <span className="val-green">{seasonData.value2}</span>
                        </div>
                        <div className="status-text">{seasonData.status}</div>
                      </div>
                    ) : (
                      <div className="add-action">
                        <PlusCircle className="add-icon" size={28} />
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddSeason;