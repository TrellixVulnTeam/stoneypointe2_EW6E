import * as React from 'react';
import { PageProps } from 'gatsby';
import { UsePrismicPreviewOptions } from './usePrismicPreview';
export interface WithPreviewResolverProps {
    isPreview: boolean | undefined;
    isLoading: boolean;
}
export declare const withPreviewResolver: <TProps extends PageProps<object, object, import("history").History.UnknownFacade>>(WrappedComponent: React.ComponentType<TProps>, options: UsePrismicPreviewOptions) => React.ComponentType<TProps>;
