import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { rootRouteRef } from './routes';
import {
  IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_URL,
  // IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_NAME,
} from './components/useIframeAppData';

export const IframePlugin = createPlugin({
  id: 'iframe',
  routes: {
    root: rootRouteRef,
  },
});

export const IframePage = IframePlugin.provide(
  createRoutableExtension({
    name: 'IframePage',
    component: () => import('./components/IframePage').then(m => m.IframePage),
    mountPoint: rootRouteRef,
  }),
);
// Embed website in Entity
export const EntityIFrameContent = IframePlugin.provide(
  createRoutableExtension({
    name: 'EntityIFrameContent',
    component: () =>
      import('./components/IframeContent').then(m => m.IFrameContent),
    mountPoint: rootRouteRef,
  }),
);

export const isIframeAvailable = (entity: Entity) =>
  Boolean(
    entity?.metadata.annotations?.[IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_URL],
  );
