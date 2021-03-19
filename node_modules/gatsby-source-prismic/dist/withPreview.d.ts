import * as React from 'react';
import { PageProps } from 'gatsby';
import { MergePrismicPreviewDataArgs } from './mergePrismicPreviewData';
declare type WithPreviewArgs = {
    mergeStrategy?: MergePrismicPreviewDataArgs['strategy'];
};
export declare const withPreview: <TProps extends PageProps<object, object, import("history").History.UnknownFacade>>(WrappedComponent: React.ComponentType<TProps>, options?: WithPreviewArgs | undefined) => React.ComponentType<TProps>;
export {};
