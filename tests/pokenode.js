/* Requirements */
var chai = require('chai');
var expect = chai.expect;
var pokeAPI = require('../pokenode');

describe('getPokemon', function() {

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
  it('Gets the Pokemon Pikachu from the Pokeapi', function() {
    expect(result).equals(true);
  });

});

describe('getType', function() {

  var result = false;

  before(function(done) {
    pokeAPI.type(3, function(err, type) {
      if (err) {
        console.log('Get Flying err:', err);
        result = false;
        return done();
      } else if (type) {
        console.log('Caught one:', type.name);
        if (type.name == 'Flying') {
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
  it('Gets the Type "Flying" from the Pokeapi', function() {
    expect(result).equals(true);
  });

});
