import React from "react";
import "./Loading.css";

export default function LoadingSpinner() {
  return (
    <div className="loading-container">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    
  );
}