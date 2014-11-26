/* Grunt Task File */

module.exports = function(grunt) {
  grunt.initConfig({
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: true
      },
      all: {
        src: ['tests/*.js']
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-simple-mocha');

  // register tasks
  grunt.registerTask('test', 'simplemocha');
};
