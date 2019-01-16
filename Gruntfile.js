'use strict';

module.exports = function (grunt) {
  //define configuiration for tasks

  // Time how long tasks take. Can help when optimizing build times
   require('time-grunt')(grunt);

   // Automatically load required Grunt tasks
   require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
           dist: {
               files: {
                   'css/styles.css': 'css/styles.scss'
               }
           }
       }
  });
  grunt.registerTask('css', ['sass']);
};
