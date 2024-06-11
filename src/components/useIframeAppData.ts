import { Entity } from '@backstage/catalog-model';

export const IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_URL =
  'iframe-plugin/website-url';

export const IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_NAME =
  'iframe-plugin/website-name';

export const useIframeAppData = ({ entity }: { entity: Entity }) => {
  const websiteUrl =
    entity?.metadata.annotations?.[IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_URL] ??
    '';
  const websiteName =
    entity?.metadata.annotations?.[
      IFRAME_ARTIFACTORY_ANNOTATION_WEBSITE_NAME
    ] ?? '';

  if (!websiteUrl) {
    throw new Error("'iframe-plugin/website-url' annotations are missing");
  }
  if (!websiteName) {
    throw new Error("'iframe-plugin/website-name' annotations are missing");
  }
  return { websiteUrl, websiteName };
};
