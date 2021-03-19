import { SourceNodesArgs } from 'gatsby';
import PrismicResolvedApi from 'prismic-javascript/d.ts/ResolvedApi';
import { Document as PrismicDocument } from 'prismic-javascript/d.ts/documents';
import { PluginOptions } from './types';
export declare function toPrismicUrl(nameOrUrl: string): string;
export declare const createClient: (repositoryName: string, accessToken?: string | undefined) => Promise<PrismicResolvedApi>;
export declare const fetchAllDocuments: (pluginOptions: PluginOptions, gatsbyContext: SourceNodesArgs) => Promise<PrismicDocument[]>;
export declare function fetchDocumentsByIds(pluginOptions: PluginOptions, gatsbyContext: SourceNodesArgs, documents: string[]): Promise<PrismicDocument[]>;
