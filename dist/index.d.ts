/// <reference types="react" />
import * as react from 'react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';

/**
 * Props for IFrame content component {@link Content}.
 *
 * @public
 */
type IframeProps = {
    src: string;
    title?: string;
    classes?: string;
};
type IframeContentProps = {
    iframe: IframeProps;
    title?: string;
};

declare const IframePlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const IframePage: (props: IframeContentProps) => react.JSX.Element;
declare const EntityIFrameContent: () => react.JSX.Element;
declare const isIframeAvailable: (entity: Entity) => boolean;

export { EntityIFrameContent, IframePage, IframePlugin, isIframeAvailable };
