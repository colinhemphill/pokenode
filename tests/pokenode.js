/* Requirements */
var chai = require('chai');
var expect = chai.expect;
var pokeAPI = require('../pokenode');

describe('setApiVersion', function() {

  var result = false;

  before(function(done) {
    pokeAPI.version(1);
    result = true;
    done();
  });

  // test GET pokemon
  it('Set the API version', function() {
    expect(result).equals(true);
  });

});

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
  it('Gets the 25th Pokemon Pikachu from the Pokeapi', function() {
    expect(result).equals(true);
  });

});

describe('getType', function() {

  var result = false;

  before(function(done) {
    pokeAPI.type(13, function(err, type) {
      if (err) {
        console.log('Get Type err:', err);
        result = false;
        return done();
      } else if (type) {
        console.log('Caught one:', type.name);
        if (type.name == 'Electric') {
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
  it('Gets the 13th Type "Electric" from the Pokeapi using the type id number', function() {
    expect(result).equals(true);
  });

});

describe('getTypeByName', function() {

  var result = false;

  before(function(done) {
    pokeAPI.type('Electric', function(err, type) {
      if (err) {
        console.log('Get Type err:', err);
        result = false;
        return done();
      } else if (type) {
        console.log('Caught one:', type.name);
        if (type.name == 'Electric') {
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
  it('Gets the Type "Electric" from the Pokeapi using the type name', function() {
    expect(result).equals(true);
  });

});

describe('getMove', function() {

  var result = false;

  before(function(done) {
    pokeAPI.move(10, function(err, move) {
      if (err) {
        console.log('Get Move err:', err);
        result = false;
        return done();
      } else if (move) {
        console.log('Caught one:', move.name);
        if (move.name == 'Scratch') {
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
  it('Gets the 10th Move "Scratch" from the Pokeapi', function() {
    expect(result).equals(true);
  });

});

describe('getAbility', function() {

  var result = false;

  before(function(done) {
    pokeAPI.ability(10, function(err, ability) {
      if (err) {
        console.log('Get Ability err:', err);
        result = false;
        return done();
      } else if (ability) {
        console.log('Caught one:', ability.name);
        if (ability.name == 'Volt-absorb') {
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
  it('Gets the 10th Ability "Volt-absorb" from the Pokeapi', function() {
    expect(result).equals(true);
  });

});

describe('getEgg', function() {

  var result = false;

  before(function(done) {
    pokeAPI.egg(10, function(err, egg) {
      if (err) {
        console.log('Get Ability err:', err);
        result = false;
        return done();
      } else if (egg) {
        console.log('Caught one:', egg.name);
        if (egg.name == 'Mineral') {
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
  it('Gets the 10th Egg Group "Mineral" from the Pokeapi', function() {
    expect(result).equals(true);
  });

});

describe('getDescription', function() {

  var result = false;

  before(function(done) {
    pokeAPI.description(10, function(err, description) {
      if (err) {
        console.log('Get Ability err:', err);
        result = false;
        return done();
      } else if (description) {
        console.log('Caught one:', description.name);
        if (description.name == 'Bulbasaur_gen_3') {
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
  it('Gets the 10th Description "Bulbasaur_gen_3" from the Pokeapi', function() {
    expect(result).equals(true);
  });

});

describe('getGame', function() {

  var result = false;

  before(function(done) {
    pokeAPI.game(10, function(err, game) {
      if (err) {
        console.log('Get Ability err:', err);
        result = false;
        return done();
      } else if (game) {
        console.log('Caught one:', game.name);
        if (game.name == 'Ruby') {
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
  it('Gets the 10th Game "Ruby" from the Pokeapi', function() {
    expect(result).equals(true);
  });

});

describe('getPokedex', function() {

  var result = false;

  before(function(done) {
    pokeAPI.pokedex(function(err, pokedex) {
      if (err) {
        console.log('Get Pokedex err:', err);
        result = false;
        return done();
      } else if (pokedex) {
        console.log('Caught them all!');
        result = true;
        return done();
      }
    });
  });

  // test GET pokemon
  it('Gets the Pokedex object from the Pokeapi', function() {
    expect(result).equals(true);
  });

});
