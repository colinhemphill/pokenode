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
    if (!pokedexNumber) {
      return fn('Error getting Pokemon. You did not specify the ' +
        'national pokedex number of the Pokemon you wish to retrieve.');
    }

    pokedexNumber = pokedexNumber.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/pokemon/' + pokedexNumber;

    request(apiCall, function(error, response, body) {
      if (error) {
        return fn('Error making API call to get pokemon ' + pokedexNumber +
          ': ' + error);
      } else if (response.statusCode == 200) {
        return fn(null, JSON.parse(body));
      } else {
        return fn('Unexpected status code for request to get pokemon: ' +
          response.statusCode);
      }
    });
  }
};
