import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Yer_maydonlari.scss';

// Mock data representing the fields in the image
const fieldData = [
  { id: 1, type: 'mosh', coords: [[41.1, 69.1], [41.11, 69.1], [41.11, 69.11], [41.1, 69.11]], area: "14.2" },
  { id: 2, type: 'makkajoxori', coords: [[41.08, 69.12], [41.09, 69.12], [41.09, 69.13], [41.08, 69.13]], area: "14.2" },
  { id: 3, type: 'paxta', coords: [[41.05, 69.15], [41.06, 69.15], [41.06, 69.16], [41.05, 69.16]], area: "14.2" },
  // Add all other 24 plots here...
];

const Yer_maydonlari = () => {
  const centerPosition = [41.08, 69.13];

  return (
    <div className="map-wrapper">
      <MapContainer center={centerPosition} zoom={14} className="leaflet-container">
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          attribution="&copy; Google Maps"
        />

        {fieldData.map((field) => (
          <React.Fragment key={field.id}>
            <Polygon
              positions={field.coords}
              className={`field-polygon field-${field.type}`}
            />
            <Marker position={field.coords[0]} opacity={0}>
              <Tooltip permanent direction="center" className={`custom-label label-${field.type}`}>
                <div className="label-content">
                  <span className="crop-name">{field.type}</span>
                  <span className="area-val">{field.area}</span>
                </div>
              </Tooltip>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default Yer_maydonlari;