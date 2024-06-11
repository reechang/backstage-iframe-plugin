import React from "react";
import { createDevApp } from "@backstage/dev-utils";
import { IframePlugin, EntityIFrameContent } from "../src/plugin";
import { Entity } from "@backstage/catalog-model";
import { EntityProvider } from "@backstage/plugin-catalog-react";
import { getWebsiteName } from "../src/components/IframeContent";

const mockEntity: Entity = {
  apiVersion: "backstage.io/v1alpha1",
  kind: "Component",
  metadata: {
    name: "backstage",
    description: "backstage.io",
    annotations: {
      "iframe-plugin/website-url": "https://xxx",
      "iframe-plugin/website-name": "Cockpit",
    },
  },
  spec: {
    lifecycle: "production",
    type: "service",
    owner: "user:guest",
  },
};

const websiteName = "Iframe plugin";
const testWebsiteName = getWebsiteName();

createDevApp()
  .registerPlugin(IframePlugin)
  .addPage({
    element: (
      <EntityProvider entity={mockEntity}>
        <EntityIFrameContent />
      </EntityProvider>
    ),
    title: websiteName,
    path: "/iframe",
  })
  .render();
