import React from 'react';
import { Content, ContentHeader, SupportButton } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import { u as useIframeAppData } from './index-CEllaBsN.esm.js';
import { I as IframeComponent } from './IframeComponent-BhfKDVAX.esm.js';
import '@backstage/core-plugin-api';

const IFrameContent = () => {
  const { entity } = useEntity();
  const { websiteUrl, websiteName } = useIframeAppData({ entity });
  return /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(
    ContentHeader,
    {
      title: websiteName || "Custom content for adding IFrame component(s)"
    },
    /* @__PURE__ */ React.createElement(SupportButton, null, websiteName || "Custom content for adding IFrame component(s)")
  ), /* @__PURE__ */ React.createElement(
    IframeComponent,
    {
      url: websiteUrl,
      width: "100%",
      height: "1600px",
      title: websiteName || "Iframe plugin"
    }
  ));
};
function getWebsiteName() {
  const { entity } = useEntity();
  const { websiteUrl, websiteName } = useIframeAppData({ entity });
  const iframeWebsiteName = websiteName;
  return iframeWebsiteName;
}

export { IFrameContent, getWebsiteName };
//# sourceMappingURL=IframeContent-DOhyf7oB.esm.js.map
