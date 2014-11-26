/* Requirements */
var request = require('request');

/* Defaults */
var defaults = {
  version: '1'
};

/* Exports */
module.exports = {

  /*
   * Set the default API version to reach.
   *
   * @param {Number}
   * @param {Function} return function
   * @return {Object}
   */
  version: function(version) {
    if (!version) {
      return console.error('Error setting Pokeapi version number.' +
        'Please provide a valid version number.');
    }
    defaults.version = version.toString();
  },

  /*
   * GET the pokedex object.
   *
   * @param {Function} return function
   * @return {Object}
   */
  pokedex: function(fn) {

  },

  /*
   * GET the pokemon at the specified pokedex number.
   *
   * @param {Number} national pokedex number
   * @param {Function} return function
   * @return {Object}
   */
  pokemon: function(pokedexNumber, fn) {

  }
};
