import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoId, title }) => {
  return (
    <div className="video-player">
      <div className="ratio ratio-16x9" style={{ maxHeight: '300px' }}>
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?si=vMuaW5iRZfnAoIh7`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPlayer; 