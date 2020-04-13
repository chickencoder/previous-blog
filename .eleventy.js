module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('img')

  return {
    dir: {
      input: "src",
      includes: "_includes",
    },
    passthroughFileCopy: true
  }
}