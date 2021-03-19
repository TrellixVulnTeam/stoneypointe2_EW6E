import * as React from 'react';
import { PageProps } from 'gatsby';
declare type WithUnpublishedPreviewArgs = {
    templateMap: Record<string, React.ComponentType<any>>;
};
export declare const withUnpublishedPreview: <TProps extends PageProps<object, object, import("history").History.UnknownFacade>>(WrappedComponent: React.ComponentType<TProps>, options: WithUnpublishedPreviewArgs) => React.ComponentType<TProps>;
export {};
