/**
 * Props for IFrame content component {@link Content}.
 *
 * @public
 */
export type IframeProps = {
  src: string;
  title?: string;
  classes?: string;
};

export type IframeContentProps = {
  iframe: IframeProps;
  title?: string;
};
