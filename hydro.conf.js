/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    attach: global,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-filter',
    formatter: 'hydro-simple',
    globals: {
      assert: require('simple-assert')
    },
    tests: [
      'test/*.js'
    ]
  });
};
