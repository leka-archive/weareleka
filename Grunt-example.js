module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',

		clean: ["pkg/"],

		env : {
			dev: {
				NODE_ENV : 'DEVELOPMENT'
			},
			prod : {
				NODE_ENV : 'PRODUCTION'
			}
		},

		bump: {
			options: {
				commit: false,
				createTag: false,
				push: false
			}
		},

		jsvalidate: {
			options:{
				globals: {},
				esprimaOptions: {},
				verbose: false
			},
			targetName:{
				files:{
					src:['app/js/*.js', 'app/js/**/*.js']
				}
			}
		},
		copy: {
			favicon: {
				src: 'app/favicon.ico',
				dest: 'pkg/',
			},
			svg: {
				src: 'app/img/ui-icons.svg',
				dest: 'pkg/',
			}
		},

		preprocess : {
			prod : {
				src : 'app/index.html',
				dest : 'pkg/app/index.html',
				options : {
					context : {
						name : '<%= pkg.name %>',
						version : '<%= pkg.version %>'
					}
				}
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'app/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'pkg/app/'
				}]
			}
		},

		requirejs: {
			compile: {
				options: {
					name: "myApp",
					baseUrl: "app/js/",
					mainConfigFile: "app/js/config.js",
					out: "pkg/app/js/<%= pkg.name %>.<%= pkg.version %>.min.js",
					findNestedDependencies: true,
					preserveLicenseComments: false,
					optimize: "uglify",
					uglify: {
						no_mangle: true
					}
				}
			}
		},

		'sftp-deploy': {
			prod: {
				auth: {
					host: ‘dev.gsell.me',
					port: 22,
					authKey: 'prod'
					},
					src: 'pkg',
					dest: '/home/www/9h00’,
					server_sep: '/'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-preprocess');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-sftp-deploy');
	grunt.loadNpmTasks('grunt-jsvalidate');

	grunt.registerTask('dev', ['env:dev', 'jsvalidate']);
	grunt.registerTask('prod', ['clean', 'env:prod', 'copy', 'preprocess:prod', 'imagemin', 'requirejs', 'sftp-deploy:prod']);
};
