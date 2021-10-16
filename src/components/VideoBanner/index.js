import React from "react";
import "./VideoBanner.css";

export default function VideoBanner(video) {
  return (
    <div className="video-banner">
      <video
        width="320"
        height="240"
        controls
        autoPlay={true}
        loop
        muted={true}
      >
        <source
          // src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          src={video}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
