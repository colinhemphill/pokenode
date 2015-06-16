[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

# Pokénode

A NodeJS wrapper for the [Pokéapi](http://pokeapi.co/ "Pokéapi").

Install via npm:

    npm install --save pokenode

## API Reference

Using this wrapper will invoke the same restrictions as hitting the API with REST calls. So there is no authentication, but you are limited to 300 requests per resource per IP address.

We follow the same naming conventions as the official API, so check the [documentation](http://pokeapi.co/docs/ "Pokéapi Documentation") for all available features. Here's a quick example. To get Bulbasaur, the equivalent of a call to ``GET http://pokeapi.co/api/v1/pokemon/1/``, do the following:

    var pokeAPI = require('pokenode');

    pokeAPI.pokemon(1, function(err, data) {
        if(err) {
            // handle err
        } else {
            // have some data about Bulbasaur
        }
    });

Available functions are ``pokedex``, ``pokemon``, ``type``, ``move``, ``ability``, ``pokemon``, ``egg``, ``description``, ``sprite``, and ``game``. The function ``pokedex`` takes no parameters, just a callback function.

You do not have to know the index of a type to get the resource. Instead, you may call:

    pokeAPI.type('fire', function(err, data) { ...

To get the fire object.

## Something else?

The Pokéapi is currently at version 1. In case that ever changes, you can set the version number with:

    var pokeAPI = require('pokenode');
    pokeAPI.version(2);

## Version History

* 0.1.2 Bugfix - return apiCall if resource not defined
* 0.1.1 Basically because I felt like it
* 0.1.0 Initial release

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/hemphillcc/cagination/blob/master/LICENSE

[npm-version-image]: http://img.shields.io/npm/v/pokenode.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/pokenode.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pokenode

[travis-image]: http://img.shields.io/travis/hemphillcc/pokenode.svg?style=flat-square
[travis-url]: http://travis-ci.org/hemphillcc/pokenode