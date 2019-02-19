import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, changeSelectedVideo }) => {
  return (
    <div
      className="col-4 px-2 border rounded h-100"
      style={{ overflow: "auto" }}
    >
      {/* <div className="card-body d-flex flex-column flex-grow-1 h-100" style={{ overflow: "auto" }}>
        {videos.map(video => (
          <VideoListItem />
        ))}
      </div> */}

      {videos.map((video, i) => (
        <VideoListItem
          key={i}
          videoData={video}
          changeSelectedVideo={changeSelectedVideo}
        />
      ))}
    </div>
  );
};

export default VideoList;
