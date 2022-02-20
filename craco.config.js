const CracoAlias = require("craco-alias");

const path = require('path');

module.exports = {
  plugins: [
    /* 别名设置 */
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json"
      }
    },
  ]
}