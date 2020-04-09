module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')

  return {
    dir: {
      input: "src",
      includes: "_includes",
    },
    passthroughFileCopy: true
  }
}