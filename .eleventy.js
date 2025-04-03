module.exports = function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("node_modules/bootstrap/dist/css");
eleventyConfig.addPassthroughCopy("node_modules/bootstrap/dist/js");
eleventyConfig.addPassthroughCopy("src/_images");
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };
