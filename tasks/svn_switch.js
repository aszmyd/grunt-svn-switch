/*
 * grunt-svn-switch
 * https://github.com/aszmyd/grunt-svn-switch
 *
 * Copyright (c) 2014 Adam Szmyd
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

      // Please see the Grunt documentation for more information regarding task
      // creation: http://gruntjs.com/creating-tasks

      grunt.registerMultiTask('svn_switch', 'Grunt SVN switching support', function () {

          var exec = require('child_process').exec;
          var options = this.options({
              bin:         'svn',
              repository:  null,
              username:    null,
              password:    null,
              execOptions: {}
          });

          var target = grunt.option('svn_target');
          if (!target) {
              return grunt.warn(
                  'Option svn_target is required! \nSpecify target, for example: "grunt svn_switch --svn_target=trunk"\n'
              );
          }

          if(options.repository === null) {
              return grunt.warn(
                  'Svn repository is required!'
              );
          }

          if (!grunt.file.exists('./.svn')) {
              return grunt.warn(
                  'You are not in SVN repository!'
              );
          }

          var done = this.async();

          var commandArgs = [
              options.bin,
              'switch'
          ];

          if(options.username !== null) {
              commandArgs.push('--username ' + options.username);
          }

          if(options.password !== null) {
              commandArgs.push('--password ' + options.password);
          }

          commandArgs.push(options.repository + target);

          var command = commandArgs.join(' ');

          grunt.log.writeln('Switching to ' + target);
          exec(command, options.execOptions, function (error, stdout) {
              grunt.log.write(stdout);
              if (error !== null) {
                  grunt.log.error(error);
                  done(false);
              } else {
                  done(true);
              }
          });

      });

};
