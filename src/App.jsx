import React, { Component } from "react";
import SearchCard from "./components/SearchCard";
import youtube from "./api/search";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

import "./App.css";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  handleSearch = async keyword => {
    // console.log(keyword)

    const result = await youtube.get("/search", {
      params: {
        q: keyword
      }
    });

    console.log(result.data);

    this.setState(() => ({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    }));
  };

  changeSelectedVideo = video => {
    console.log("Video change triggerd", video);

    this.setState(() => ({ selectedVideo: video }));
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="App d-flex flex-column p-4">
        <div className="container">
          <SearchCard handleSearch={this.handleSearch} />
        </div>

        {!selectedVideo ? (
          <h1 className="text-center font-weight-light mt-3">Search from youtube...</h1>
        ) : (
          <div className="row mx-0 mt-3 flex-grow-1">
            <VideoPlayer selectedVideo={selectedVideo} />
            <VideoList
              videos={videos}
              changeSelectedVideo={this.changeSelectedVideo}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
