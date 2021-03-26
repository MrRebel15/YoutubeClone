import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loadingg..</div>;
  }
  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video-Player" src={VideoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <h5>
          Channel Name :-
          {video.snippet.channelTitle}
        </h5>
        <p>Release at : {video.snippet.publishTime}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
