import React from "react";
import "./style/ProfileTooltip.css";

const ProfileTooltip = ({ children, profileImage }) => {
  return (
    <div className="tooltip-container">
      <span className="tooltip-text">
        {children}
        {profileImage && (
          <span className="tooltip">
            <img src={profileImage} alt="Profile" className="tooltip-image" />
          </span>
        )}
      </span>
    </div>
  );
};

export default ProfileTooltip;
