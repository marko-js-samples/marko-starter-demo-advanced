// const path = require('path');

require('marko-starter').plugins([
  // Enable babel support
  require('marko-starter-babel')
]);

module.exports = require('marko-starter').projectConfig({
  name: 'demo',

  colors: true,

  // Babel configuration
  babelConfig: {
    extensions: ['.js', '.es6']
  },

  routePathPrefix: '/demo',

  /**
   * `beforeStart(...)` is called before the build or server starts.
   */
  beforeStart (project) {
    project.addRoutes([
      {
        path: '/custom',

        metadata: {
          favoriteColor: 'blue'
        },

        handler (input, out) {
          out.end(input.metadata.favoriteColor);
        }
      }
    ]);
  }
});
