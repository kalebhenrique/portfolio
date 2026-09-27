import React from "react";

export interface CldImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  width?: number | string;
  height?: number | string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function CldImage({
  src,
  width,
  height,
  alt,
  className = "",
  fill = false,
  priority = false,
  ...rest
}: CldImageProps) {
  let url = src;

  if (src) {
    if (src === "celeste2") {
      url = "/celeste2.png";
    } else if (src === "eu") {
      url = "/eu.jpg";
    } else if (src === "api-ruby" || src === "api-ruby.png") {
      url = "/api-ruby.png";
    } else if (src === "ibd" || src === "ib" || src === "ib.png") {
      url = "/ib.png";
    } else if (!src.startsWith("http://") && !src.startsWith("https://") && !src.startsWith("/")) {
      url = `/${src}`;
    }
  }

  const fillClasses = fill
    ? "absolute inset-0 h-full w-full object-cover"
    : "";

  return (
    <img
      src={url}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? undefined : "lazy"}
      // @ts-ignore
      fetchpriority={priority ? "high" : undefined}
      className={`${fillClasses} ${className}`.trim()}
      {...rest}
    />
  );
}
