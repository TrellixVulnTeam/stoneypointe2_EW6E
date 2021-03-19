var plugins = [{
      name: 'gatsby-source-prismic',
      plugin: require('/Users/marcelo/Gatsby_Sites/stoneypointe2/stoneypointe2/node_modules/gatsby-source-prismic/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"stoneypointe2","accessToken":"","releaseID":"","prismicToolbar":true,"schemas":{"blogHome":{"Main":{"headline":{"type":"StructuredText","config":{"single":"heading1","label":"Headline","placeholder":"Main title..."}},"description":{"type":"StructuredText","config":{"multi":"heading2","label":"Description","placeholder":"Sub-title..."}},"image":{"type":"Image","config":{"constraint":{"width":140,"height":140},"thumbnails":[],"label":"Image"}}}},"post":{"Blog Post":{"uid":{"type":"UID","config":{"label":"UID","placeholder":"unique-identifier-for-blog-post-url"}},"title":{"type":"StructuredText","config":{"single":"heading1","label":"Title","placeholder":"Blog Post Title..."}},"date":{"type":"Date","config":{"label":"Date"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{"image_with_caption":[{"name":"emphasized","display":"Emphasized"},{"name":"image-full-width","display":"Full"}]},"choices":{"text":{"type":"Slice","fieldset":"Text","description":"A rich text section","icon":"text_fields","non-repeat":{"text":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading2, heading3, strong, em, hyperlink, embed, list-item, o-list-item, o-list-item","allowTargetBlank":true,"label":"Text","placeholder":"Post text..."}}},"repeat":{}},"quote":{"type":"Slice","fieldset":"Quote","description":"A quote section","icon":"format_quote","non-repeat":{"quote":{"type":"StructuredText","config":{"single":"paragraph","label":"Quote","placeholder":"Post Quote..."}}},"repeat":{}},"image_with_caption":{"type":"Slice","fieldset":"Image with Caption","description":"An image with an optional caption","icon":"image","non-repeat":{"image":{"type":"Image","config":{"constraint":{"width":1200},"thumbnails":[],"label":"Image"}},"caption":{"type":"StructuredText","config":{"single":"heading3","label":"Caption","placeholder":"Image Caption..."}}},"repeat":{}}}}}}}}},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/marcelo/Gatsby_Sites/stoneypointe2/stoneypointe2/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/marcelo/Gatsby_Sites/stoneypointe2/stoneypointe2/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"42b93fed6f8e355f95918d74c1ec11a0"},
    },{
      name: 'default-site-plugin',
      plugin: require('/Users/marcelo/Gatsby_Sites/stoneypointe2/stoneypointe2/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
