import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProfileTooltip from "./ToolTips/ProfileTooltip";
import "./style/Policy.css";

const Policy = ({
  title,
  content = "",
  Bullets,
  author = "",
  profileImg,
  position = "",
  idName,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        const yOffset = -90;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="content-section justify" id={idName}>
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
