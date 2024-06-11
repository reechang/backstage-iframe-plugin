import { createRouteRef, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "backstage-plugin-iframe"
});

const IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_URL = "iframe-plugin/website-url";
const IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_NAME = "iframe-plugin/website-name";
const useIframeAppData = ({ entity }) => {
  var _a, _b, _c, _d;
  const websiteUrl = (_b = (_a = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a[IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_URL]) != null ? _b : "";
  const websiteName = (_d = (_c = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _c[IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_NAME]) != null ? _d : "";
  if (!websiteUrl) {
    throw new Error("'iframe-plugin/website-url' annotations are missing");
  }
  if (!websiteName) {
    throw new Error("'iframe-plugin/website-name' annotations are missing");
  }
  return { websiteUrl, websiteName };
};

const IframePlugin = createPlugin({
  id: "iframe",
  routes: {
    root: rootRouteRef
  }
});
const IframePage = IframePlugin.provide(
  createRoutableExtension({
    name: "IframePage",
    component: () => import('./IframePage-Cxx-RQD9.esm.js').then((m) => m.IframePage),
    mountPoint: rootRouteRef
  })
);
const EntityIFrameContent = IframePlugin.provide(
  createRoutableExtension({
    name: "EntityIFrameContent",
    component: () => import('./IframeContent-DOhyf7oB.esm.js').then((m) => m.IFrameContent),
    mountPoint: rootRouteRef
  })
);
const isIframeAvailable = (entity) => {
  var _a;
  return Boolean(
    (_a = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a[IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_URL]
  );
};

export { EntityIFrameContent as E, IframePage as I, IframePlugin as a, isIframeAvailable as i, useIframeAppData as u };
//# sourceMappingURL=index-CEllaBsN.esm.js.map
