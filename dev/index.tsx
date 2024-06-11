import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { IframePlugin, IframePage, EntityIFrameContent } from '../src/plugin';
import { Entity } from '@backstage/catalog-model';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import { getWebsiteName } from '../src/components/IframeContent';

const mockEntity: Entity = {
  apiVersion: 'backstage.io/v1alpha1',
  kind: 'Component',
  metadata: {
    name: 'backstage',
    description: 'backstage.io',
    annotations: {
      'iframe-plugin/website-url': 'https://self-service-cockpit.icp.infineon.com/dashboard',
      'iframe-plugin/website-name': 'Cockpit',
    },
  },
  spec: {
    lifecycle: 'production',
    type: 'service',
    owner: 'user:guest',
  },
};

const IFrameProps = {
  src: 'https://self-service-cockpit.icp.infineon.com/',
};

const websiteName = 'Iframe plugin';
const testWebsiteName = getWebsiteName();

// createDevApp()
//   .registerPlugin(IframePlugin)
//   .addPage({
//     element: <IframePage iframe={IFrameProps} />,
//     title: 'Root Page',
//     path: '/backstage-plugin-iframe',
//   })
//   .render();

createDevApp()
  .registerPlugin(IframePlugin)
  .addPage({
    element: (
      <EntityProvider entity={mockEntity}>
        <EntityIFrameContent />
      </EntityProvider>
    ),
    title: websiteName,
    path: '/iframe',
  })
  .render();
