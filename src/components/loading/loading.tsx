import React from "react";
import "./loading.styles.scss";
import { RotatingLines } from "react-loader-spinner";

const Loading: React.FC = () => {
  return (
    <>
      <div className="loadingSpinner">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </>
  );
};
export default Loading;
