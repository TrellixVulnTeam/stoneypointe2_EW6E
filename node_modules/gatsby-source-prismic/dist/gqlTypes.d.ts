import { NodePluginSchema, GatsbyCache } from 'gatsby';
import { ImgixUrlParams } from 'gatsby-plugin-imgix';
declare type BuildPrismicImageTypesArgs = {
    schema: NodePluginSchema;
    cache: GatsbyCache;
    defaultImgixParams?: ImgixUrlParams;
    defaultPlaceholderImgixParams?: ImgixUrlParams;
};
export declare const buildPrismicImageTypes: ({ schema, cache, defaultImgixParams, defaultPlaceholderImgixParams, }: BuildPrismicImageTypesArgs) => ((import("graphql").GraphQLObjectType<import("gatsby-image").FixedObject, any, {
    [key: string]: any;
}> | import("graphql").GraphQLObjectType<import("gatsby-image").FluidObject, any, {
    [key: string]: any;
}>)[] | import("gatsby").GatsbyGraphQLObjectType[])[];
export declare const types: string;
export {};
