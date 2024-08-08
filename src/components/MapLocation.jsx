import React from "react";
import "./style/MapLocation.css";
import { mapLink } from "../variables/vars";

const MapLocation = () => {
  return (
    <div className="map-container">
      <iframe
        src={mapLink}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Location Map"
      ></iframe>
    </div>
  );
};

export default MapLocation;
