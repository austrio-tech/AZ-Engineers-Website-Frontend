import React from "react";
import Policy from "../components/Policy";
import {
  founderMsg,
  hist,
  HSE_Policy,
  QHSE_Policy,
  Mission_Vision,
  DirectorPolicies,
} from "../variables/vars";
import "./style/Policies.css";

const Policies = () => {
  return (
    <div className="policies-container">
      <div className="headGap"></div>
      <div className="shadowText headingContainer">Policies</div>
      <div className="policies">
      <Policy {...Object.assign({}, founderMsg, {idName: "FounderMsg"})} />
      <Policy {...Object.assign({}, Mission_Vision, {idName: "Mission"})} />
      <Policy {...Object.assign({}, hist, {idName: "History"})} />
      <Policy {...Object.assign({}, HSE_Policy, {idName: "HSEPolicy"})} />
      <Policy {...Object.assign({}, QHSE_Policy, {idName: "QHSEPolicy"})} />
      <Policy {...Object.assign({}, DirectorPolicies, {idName: "Priciples"})} />
      </div>
{/*       
      <Policy {...hist} />
      <Policy {...HSE_Policy} />
      <Policy {...QHSE_Policy} />
      <Policy {...Mission_Vision} /> 
      <Policy {...DirectorPolicies} /> */}
    </div>
  );
};

export default Policies;
