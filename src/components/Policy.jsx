import React from "react";
import ProfileTooltip from "./ToolTips/ProfileTooltip";
import "./style/Policy.css";

const Policy = ({
  title,
  content = "",
  Bullets,
  author = "",
  profileImg,
  position = "",
}) => {
  return (
    <div className="content-section">
      <h2 className="content-title">{title}</h2>
      <p
        className="content-paragraph"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      <ul className="content-bullet-points">
        {Bullets?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="content-author">
        <p>
          <b>
            <ProfileTooltip profileImage={profileImg}>{author}</ProfileTooltip>
          </b>
        </p>
        <div className="contentPosition">
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
