import React from "react";
import "./videos.styles.scss";
import FilterHeader from "../filterHeader/filterHeader";
import Video from "../video/video";

interface Props {
  data: any[];
}

const Videos: React.FC<Props> = ({ data }) => {
  return (
    <section className="videosContainer">
      {data.length > 0 && <FilterHeader length={data.length} />}
      {data.length > 0 &&
        data.map((item) => {
          return <Video key={item.id.videoId} item={item} />;
        })}
    </section>
  );
};

export default Videos;
