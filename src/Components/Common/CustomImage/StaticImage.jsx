"use client";
// Next js
import Image from "next/image";

const StaticImage = ({
  src,
  alt = "image",
  width,
  height,
  className = "",
  priority = false,
  ...imageProps
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      {...imageProps}
    />
  );
};
export default StaticImage;
