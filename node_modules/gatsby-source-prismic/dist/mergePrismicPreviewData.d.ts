import { NodeTree } from './types';
export interface MergePrismicPreviewDataArgs {
    staticData?: NodeTree;
    previewData?: NodeTree;
    /**
     * Determines the method with which the function merges preview data into static data.
     *
     * - `traverseAndReplace`: Traverse static data nodes and replace with preview data if IDs match.
     * - `rootReplaceOrInsert`: Replace or insert preview data at the root level.
     */
    strategy?: 'traverseAndReplace' | 'rootReplaceOrInsert';
}
/**
 * Merges preview data with static data. Different merge strategies can be used
 * for different environments.
 */
export declare const mergePrismicPreviewData: ({ staticData, previewData, strategy, }: MergePrismicPreviewDataArgs) => NodeTree | undefined;
