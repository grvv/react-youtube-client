import React from "react";
// import Plyr from "react-plyr";


// Checkout --> https://www.npmjs.com/package/plyr

const VideoPlayer = ({ selectedVideo }) => {
  const videoUrl = `http://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div className="col-8 h-100 embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={videoUrl}  title={selectedVideo.snippet.title}/>
    </div>

    // <div className="col-8 h-100">
    //   <Plyr type="youtube" videoId={selectedVideo.id.videoId} />
    // </div>
  );
};

export default VideoPlayer;
