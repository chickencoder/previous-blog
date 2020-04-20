const moment = require('moment')
const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('img')

  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.addFilter('dateformat', function (dateIn) {
    return moment(dateIn).format('Do MMM YYYY')
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
    },
    passthroughFileCopy: true,
  }
}