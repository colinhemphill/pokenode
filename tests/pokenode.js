/* Requirements */
var expect = require('chai').expect;
var pokeAPI = require('../pokenode');

describe('get pokemon test', function() {

  // test 1st page
  it('Get the Pokemon Pikachu from the Pokeapi', function() {
    var result = false;

    pokeAPI.pokemon(25, function(err, pokemon) {
      if (err) {
        console.log(error(err.toString()));
        result = false;
      } else if (films && count && totalPages) {
        console.log(pokemon);
        if (pokemon.name == 'Pikachu') {
          result = true;
        } else {
          result = false;
        }
      }
      expect(result).equals(true);
    });
  });

});
