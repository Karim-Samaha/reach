import React from "react";
interface Props {
  videoDate: Date;
}

//This Component Was Created to get the differnce between the video releaseing time and the current time

const GetDate: React.FC<Props> = ({ videoDate }) => {
  const dateToTimeAgo = (date: Date): string => {
    const now = new Date(Date.now());
    const difftime = now.getTime() - date.getTime();
    const diffDate = new Date(difftime - 5.5 * 60 * 60 * 1000);
    const [sec, min, hr, day, month] = [
      diffDate.getSeconds(),
      diffDate.getMinutes(),
      diffDate.getHours(),
      diffDate.getDate() - 1,
      diffDate.getMonth(),
    ];
    const f = (property: any, end: any) => {
      return `${property} ${end}${property > 1 ? "s" : ""} ago`;
    };
    return month >= 1
      ? f(month, "month")
      : day >= 1
      ? f(day, "day")
      : hr >= 1
      ? f(hr, "hr")
      : min >= 1
      ? f(min, "min")
      : day >= 1
      ? f(sec, "sec")
      : "";
  };
  return <h5>{dateToTimeAgo(new Date(videoDate))}</h5>;
};

export default GetDate;
