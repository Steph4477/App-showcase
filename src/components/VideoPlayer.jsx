import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-player">
      <video controls width="100%" height="100%">
        <source src={src} type="video/mp4" />
        Votre navigateur ne prend pas en charge le format de la vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
