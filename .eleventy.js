const moment = require('moment')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('img')

  eleventyConfig.addFilter('dateformat', function (dateIn) {
    return moment(dateIn).format('Do MMMM YYYY')
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
    },
    passthroughFileCopy: true,
  }
}
