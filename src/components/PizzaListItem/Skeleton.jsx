import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={270}
    height={416}
    viewBox="0 0 270 416"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* <circle cx="134" cy="136" r="124" /> */}
    <rect x="0" y="0" rx="20" ry="10" width="270" height="200" />
    <rect x="0" y="212" rx="10" ry="10" width="270" height="32" />
    <rect x="0" y="260" rx="10" ry="10" width="270" height="90" />
    <rect x="0" y="380" rx="10" ry="10" width="95" height="30" />
    <rect x="123" y="370" rx="20" ry="20" width="142" height="45" />
  </ContentLoader>
);

export default Skeleton;
