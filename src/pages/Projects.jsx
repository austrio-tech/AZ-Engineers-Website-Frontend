import React from "react";
import DataTable from "../components/DataTable";
import { projects } from "../variables/vars";
import "./style/Projects.css";

const Projects = ({ current = false }) => {
  return (
    <div className="container">
      <div className="headGap"></div>
      <div className="headingContainer">
        <div className="headingTitle">
          {current ? "Current " : "Completed "}Projects
        </div>
      </div>
      <DataTable
        filename={
          current ? projects.currentProjects : projects.completedProjects
        }
      />
    </div>
  );
};

export default Projects;
