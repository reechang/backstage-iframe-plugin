import React from 'react';

const IframeComponent = ({
  url,
  className,
  width,
  height,
  title
}) => {
  return /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: url,
      className,
      width,
      height,
      title,
      frameBorder: "0",
      allowFullScreen: true
    }
  );
};

export { IframeComponent as I };
//# sourceMappingURL=IframeComponent-BhfKDVAX.esm.js.map
