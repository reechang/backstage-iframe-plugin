import React from 'react';

interface IframeProps {
  url: string;
  className?: string;
  width?: string;
  height?: string;
  title?: string;
}

export const IframeComponent: React.FC<IframeProps> = ({
  url,
  className,
  width,
  height,
  title,
}) => {
  return (
    <iframe
      src={url}
      className={className}
      width={width}
      height={height}
      title={title}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

// export default IframeComponent;
