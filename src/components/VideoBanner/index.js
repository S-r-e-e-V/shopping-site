import React from "react";
import "./VideoBanner.css";

export default function VideoBanner({ video }) {
  return (
    <div className="video-banner">
      <video autoPlay={true} loop muted={true}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
