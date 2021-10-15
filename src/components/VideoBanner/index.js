import React from "react";
import "./VideoBanner.css";

export default function VideoBanner() {
  return (
    <div className="video-banner">
      <video width="320" height="240" autoPlay={false} loop muted={true}>
        <source
          src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
