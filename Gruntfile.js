/*
 * Generated on 2014-02-26
 * generator-assemble v0.4.10
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({

		config: {
			src: 'src',
			dist: 'dist',
			bower: 'bower_components',
			srcCss: '<%= config.src %>/css',
			srcImg: '<%= config.src %>/img',
			srcVid: '<%= config.src %>/vid',
			distJs: '<%= config.dist %>/assets/js',
			distCss: '<%= config.dist %>/assets/css',
			distImg: '<%= config.dist %>/assets/img',
			distVid: '<%= config.dist %>/assets/vid'
		},

		watch: {
			assemble: {
				files: ['<%= config.src %>/{content,data,templates,css}/**/*.{md,hbs,yml,scss}'],
				tasks: ['assemble','sass']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= config.dist %>/{,*/}*.html',
				'<%= config.dist %>/assets/{,*/}*.css',
				'<%= config.dist %>/assets/{,*/}*.js',
				'<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'<%= config.dist %>'
					]
				}
			}
		},

		assemble: {
			pages: {
				options: {
					flatten: true,
					assets: '<%= config.dist %>/assets',
					layoutdir: '<%= config.src %>/templates/layouts',
					data: '<%= config.src %>/data/*.{json,yml}',
					partials: '<%= config.src %>/templates/partials/*.hbs',
					plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap'],
				},
				files: {
					'<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
				}
			}
		},

		sass: {
			dist: {
				files: {
					'<%= config.distCss %>/style.css': '<%= config.srcCss %>/style.scss'
				}
			}
		},

		copy: {
			jquery: {
				expand: true,
				src: [
					'<%= config.bower %>/jquery/dist/jquery.min.js',
					'<%= config.bower %>/jquery-ui/ui/minified/jquery-ui.min.js',
					'<%= config.bower %>/jquery-ui/ui/minified/jquery-ui.custom.min.js',
					'<%= config.bower %>/modernizr/modernizr.js'
				],
				dest: '<%= config.distJs %>/vendor/',
				filter: 'isFile',
				flatten: true
			},
			img: {
				expand: true,
				src: '<%= config.srcImg %>/**',
				dest: '<%= config.distImg %>/',
				filter: 'isFile',
				flatten: true
			},
			vid: {
				expand: true,
				src: '<%= config.srcVid%>/**',
				dest: '<%= config.distVid %>/',
				filter: 'isFile',
				flatten: true
			}
		},

		'ftp-deploy': {
			build: {
				auth: {
					host: 'ftp.leka-smarttoys.com',
					port: 21,
					authKey: 'leka'
				},
				src: 'dist',
				dest: '/discovermoti'
			}
		},

		// Before generating any new files,
		// remove any previously-created files.
		clean: ['<%= config.dist %>/**/*.{html,xml,css,js,png}']

	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ftp-deploy');

	grunt.registerTask('server', [
		'build',
		'connect:livereload',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean',
		'copy',
		'sass',
		'assemble'
	]);

	grunt.registerTask('deploy', [
		'ftp-deploy'
	]);

	grunt.registerTask('default', [
		'build'
	]);

};
