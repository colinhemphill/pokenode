/* Requirements */
var chai = require('chai');
var expect = chai.expect;
var pokeAPI = require('../pokenode');

describe('get pokemon test', function() {

  var result = false;

  before(function(done) {
    pokeAPI.pokemon(25, function(err, pokemon) {
      if (err) {
        console.log('Get Pikachu err:', err);
        result = false;
        return done();
      } else if (pokemon) {
        console.log('Caught one:', pokemon.name);
        if (pokemon.name == 'Pikachu') {
          result = true;
          return done();
        } else {
          result = false;
          return done();
        }
      }
    });
  });

  // test GET pokemon
  it('Get the Pokemon Pikachu from the Pokeapi', function() {
    expect(result).equals(true);
  });


});
