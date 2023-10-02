import React from "react";

const Image = ({ src, alt, className, width, height }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={`${className} w-[${width} h-[${height}]]`}
      />
    </div>
  );
};

export default Image;
