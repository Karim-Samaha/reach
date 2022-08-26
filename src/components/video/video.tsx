import React from "react";
import "./video.styles.scss";
import GetDate from "../get-date/getDate";
interface Props {
  item: {
    snippet: {
      channelTitle: String;
      description: String;
      publishTime: any;
      thumbnails: any;
      title: String;
    };
  };
}
const Video: React.FC<Props> = ({ item }) => {
  const { snippet } = item;

  return (
    <div className="video">
      <img src={snippet.thumbnails.high.url} alt="Video" />
      <div className="info">
        <h2>{snippet.title}</h2>
        <div className="channel">
          <h4>{snippet.channelTitle}</h4>
          <GetDate videoDate={snippet.publishTime} />
        </div>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default Video;
