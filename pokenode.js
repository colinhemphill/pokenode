/* REQUIREMENTS */
var request = require('request');

/* Defaults */
var defaults = {
  version: '1'
};

/* EXPORTS */
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
    return defaults.version = version.toString();
  },

  /*
   * GET the pokedex object.
   *
   * @param {Function} return function
   * @return {Object}
   */
  pokedex: function(fn) {
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version + '/pokedex/1';
    request(apiCall, function(error, response, body) {
      if (error) {
        return fn('Error making API call to get pokedex: ' + err);
      } else if (response.statusCode == 200) {
        return fn(null, JSON.parse(body));
      } else {
        return fn('Unexpected status code for request to get pokedex: ' +
          response.statusCode);
      }
    });
  },

  /*
   * GET the pokemon at the specified pokedex number.
   *
   * @param {Number} national pokedex number
   * @param {Function} return function
   * @return {Object}
   */
  pokemon: function(pokedexNumber, fn) {
    if (!pokedexNumber || (typeof pokedexNumber !== 'number' &&
        typeof pokedexNumber !== 'string')) {
      return fn('Error getting Pokemon. You did not specify the ' +
        'national pokedex number of the Pokemon you wish to retrieve.');
    }

    pokedexNumber = pokedexNumber.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/pokemon/' + pokedexNumber;

    makeTheCall(pokedexNumber, 'pokemon', apiCall, function(err, data) {
      return fn(err, data);
    });
  },

  /*
   * GET the type at the specified id number or name.
   *
   * @param {Number} type id number
   * @param {Function} return function
   * @return {Object}
   */
  type: function(type, fn) {
    if (!type || (typeof type !== 'number' &&
        typeof type !== 'string')) {
      return fn('Error getting Type. You did not specify the ' +
        'type name or id number of the type you want to retrieve.');
    }

    if (typeof type === 'string') {
      type = getTypeNumberFromString(type);
    }

    type = type.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/type/' + type;

    makeTheCall(type, 'type', apiCall, function(err, data) {
      return fn(err, data);
    });
  },

  /*
   * GET the move at the specified id number.
   *
   * @param {Number} move id number
   * @param {Function} return function
   * @return {Object}
   */
  move: function(move, fn) {
    if (!move || (typeof move !== 'number' &&
        typeof move !== 'string')) {
      return fn('Error getting Move. You did not specify the ' +
        'id number of the move you want to retrieve.');
    }

    move = move.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/move/' + move;

    makeTheCall(move, 'move', apiCall, function(err, data) {
      return fn(err, data);
    });
  },

  /*
   * GET the ability at the specified id number.
   *
   * @param {Number} ability id number
   * @param {Function} return function
   * @return {Object}
   */
  ability: function(ability, fn) {
    if (!ability || (typeof ability !== 'number' &&
        typeof ability !== 'string')) {
      return fn('Error getting Move. You did not specify the ' +
        'id number of the ability you want to retrieve.');
    }

    ability = ability.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/ability/' + ability;
    makeTheCall(ability, 'ability', apiCall, function(err, data) {
      return fn(err, data);
    });
  },

  /*
   * GET the egg at the specified id number.
   *
   * @param {Number} egg id number
   * @param {Function} return function
   * @return {Object}
   */
  egg: function(egg, fn) {
    if (!egg || (typeof egg !== 'number' &&
        typeof egg !== 'string')) {
      return fn('Error getting Move. You did not specify the ' +
        'id number of the egg you want to retrieve.');
    }

    egg = egg.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/egg/' + egg;
    makeTheCall(egg, 'egg', apiCall, function(err, data) {
      return fn(err, data);
    });
  },

  /*
   * GET the description at the specified id number.
   *
   * @param {Number} description id number
   * @param {Function} return function
   * @return {Object}
   */
  description: function(description, fn) {
    if (!description || (typeof description !== 'number' &&
        typeof description !== 'string')) {
      return fn('Error getting Move. You did not specify the ' +
        'id number of the description you want to retrieve.');
    }

    description = description.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/description/' + description;
    makeTheCall(description, 'description', apiCall, function(err, data) {
      return fn(err, data);
    });
  },

  /*
   * GET the sprite at the specified id number.
   *
   * @param {Number} sprite id number
   * @param {Function} return function
   * @return {Object}
   */
  sprite: function(sprite, fn) {
    if (!sprite || (typeof sprite !== 'number' &&
        typeof sprite !== 'string')) {
      return fn('Error getting Move. You did not specify the ' +
        'id number of the sprite you want to retrieve.');
    }

    sprite = sprite.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/sprite/' + sprite;
    makeTheCall(sprite, 'sprite', apiCall, function(err, data) {
      return fn(err, data);
    });
  },

  /*
   * GET the game at the specified id number.
   *
   * @param {Number} game id number
   * @param {Function} return function
   * @return {Object}
   */
  game: function(game, fn) {
    if (!game || (typeof game !== 'number' &&
        typeof game !== 'string')) {
      return fn('Error getting Move. You did not specify the ' +
        'id number of the game you want to retrieve.');
    }

    game = game.toString();
    var apiCall = 'http://pokeapi.co/api/v' + defaults.version +
      '/game/' + game;
    makeTheCall(game, 'game', apiCall, function(err, data) {
      return fn(err, data);
    });
  }
};

/* HELPERS */

function makeTheCall(api, apiName, apiCall, fn) {
  request(apiCall, function(error, response, body) {
    if (error) {
      return fn('Error making API call to get ' + apiName + ' ' + resource +
        ': ' + error);
    } else if (response.statusCode == 200) {
      return fn(null, JSON.parse(body));
    } else {
      return fn('Unexpected status code for request to get '+
        apiCall + ': ' + response.statusCode);
    }
  });
}

function getTypeNumberFromString(typeString) {
  var typeNumber;
  typeString = typeString.toLowerCase().trim();
  switch (typeString) {
    case 'normal':
      typeNumber = 1;
      break;
    case 'fighting':
      typeNumber = 2;
      break;
    case 'flying':
      typeNumber = 3;
      break;
    case 'poison':
      typeNumber = 4;
      break;
    case 'ground':
      typeNumber = 5;
      break;
    case 'rock':
      typeNumber = 6;
      break;
    case 'bug':
      typeNumber = 7;
      break;
    case 'ghost':
      typeNumber = 8;
      break;
    case 'steel':
      typeNumber = 9;
      break;
    case 'fire':
      typeNumber = 10;
      break;
    case 'water':
      typeNumber = 11;
      break;
    case 'grass':
      typeNumber = 12;
      break;
    case 'electric':
      typeNumber = 13;
      break;
    case 'psychic':
      typeNumber = 14;
      break;
    case 'ice':
      typeNumber = 15;
      break;
    case 'dragon':
      typeNumber = 16;
      break;
    case 'dark':
      typeNumber = 17;
      break;
    case 'fairy':
      typeNumber = 18;
      break;
  }
  return typeNumber;
}
