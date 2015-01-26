/*
 * grunt-releaser2
 * https://github.com/mcsdh/grunt-releaser2
 *
 * Copyright (c) 2015 Leon Coto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: [
                'gruntfile.js',
                'tasks/*.js',
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        releaser: {
            options: {
                tagName: 'v<%= version %>'
            },
            bump: {
                options: {
                    bump: true,
                    add: true,
                    commit: true,
                    push: false,
                    tag: false,
                    pushTags: false,
                    npm: false,
                    reloadpkg: true
                }
            },
            release: {
                options: {
                    bump: false,
                    commit: false,
                    add: false,
                    push: true,
                    tag: true,
                    pushTags: true,
                    npm: true,
                }
            }
        },
    })

    grunt.loadTasks('tasks')
    grunt.loadNpmTasks('grunt-release')
    grunt.loadNpmTasks('grunt-contrib-jshint')

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint'])

}
