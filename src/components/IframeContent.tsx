import React from "react";
import {
  Content,
  ContentHeader,
  SupportButton,
} from "@backstage/core-components";
import { useEntity } from "@backstage/plugin-catalog-react";
import { useIframeAppData } from "./useIframeAppData";
import { IframeComponent } from "./IframeComponent";

export const IFrameContent = () => {
  const { entity } = useEntity();
  const { websiteUrl, websiteName } = useIframeAppData({ entity });

  return (
    <Content>
      <ContentHeader
        title={websiteName || "Custom content for adding IFrame component(s)"}
      >
        <SupportButton>
          {websiteName || "Custom content for adding IFrame component(s)"}
        </SupportButton>
      </ContentHeader>
      {/* <iframe src={websiteUrl} title={websiteName || 'Iframe plugin'} /> */}
      <IframeComponent
        url={websiteUrl}
        width="100%"
        height="1600px"
        title={websiteName || "Iframe plugin"}
      />
    </Content>
  );
};

export function getWebsiteName() {
  const { entity } = useEntity();
  const { websiteName } = useIframeAppData({ entity });
  // iframeWebsiteUrl = websiteUrl;
  const iframeWebsiteName = websiteName;
  return iframeWebsiteName;
}
