import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const center = [-23.0535225, -45.6072578];

  const alfineteIconUrl = "/images/Alfinete.png";

  const alfineteIconSize = [50, 50];

  const alfineteIcon = L.icon({
    iconUrl: alfineteIconUrl,
    iconSize: alfineteIconSize,
  });

  const openGoogleMapsWithDirections = () => {
    const destination = `${center[0]},${center[1]}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={center}
        icon={alfineteIcon}
        onClick={openGoogleMapsWithDirections}
      >
        <Popup>
          <div>
            <strong>Clube de Tiro Taubaté Shooting Club</strong>
            <br />
            <button onClick={openGoogleMapsWithDirections}>
              Obter direções
            </button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
