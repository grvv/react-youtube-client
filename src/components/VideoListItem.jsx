import React from "react";

const VideoListItem = ({ videoData, changeSelectedVideo }) => {
  return (
    <div
      className="border rounded p-2 mt-2 d-flex"
      style={{ cursor: "pointer" }}
      onClick={() => changeSelectedVideo(videoData)}
    >
      <img
        className="rounded img-fluid my-auto"
        src={videoData.snippet.thumbnails.medium.url}
        alt={videoData.snippet.title}
        style={{ height: "100px", width: "100px" }}
      />
      <h5 className="font-weight-light p-3">{videoData.snippet.title}</h5>
    </div>
  );
};

export default VideoListItem;
