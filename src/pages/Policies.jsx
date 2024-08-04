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
      <Policy {...founderMsg} />
      <Policy {...hist} />
      <Policy {...HSE_Policy} />
      <Policy {...QHSE_Policy} />
      <Policy {...Mission_Vision} />
      <Policy {...DirectorPolicies} />
    </div>
  );
};

export default Policies;
