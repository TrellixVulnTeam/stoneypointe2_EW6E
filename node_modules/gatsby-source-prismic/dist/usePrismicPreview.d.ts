import { Node } from 'gatsby';
import { PluginOptions } from './types';
export declare type UsePrismicPreviewOptions = Pick<PluginOptions, 'repositoryName' | 'accessToken' | 'linkResolver' | 'htmlSerializer' | 'fetchLinks' | 'lang' | 'typePathsFilenamePrefix'> & {
    pathResolver?: PluginOptions['linkResolver'];
    schemasDigest?: string;
};
interface State {
    isPreview?: boolean;
    isLoading: boolean;
    previewData?: {
        [key: string]: Node;
    };
    path?: string;
}
export declare const usePrismicPreview: (options: UsePrismicPreviewOptions) => State;
export {};
