import React from 'react';
import { IframeComponent } from './IframeComponent';
import { IframeContentProps } from './types';

// export const IframePage: React.FC = () => {
export const IframePage = (props: IframeContentProps) => {
  const { iframe } = props;
  return (
    <div>
      <IframeComponent
        url={iframe.src}
        width="100%"
        height="1600px"
        title={iframe.title}
      />
    </div>
  );
};
