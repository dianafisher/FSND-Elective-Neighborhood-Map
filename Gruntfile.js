module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        clean: {
          files: ['dist']
        },
        concat: {
          options: {
            banner: '<%= banner %>',
            stripBanners: true
          },
          dist: {
            src: ['src/<%= pkg.name %>.js'],
            dest: 'dist/ba-<%= pkg.name %>.js'
          },
        },
        uglify: {
          options: {
            banner: '<%= banner %>'
          },
          dist: {
            src: '<%= concat.dist.dest %>',
            dest: 'dist/ba-<%= pkg.name %>.min.js'
          },
        },
        qunit: {
          files: ['test/**/*.html']
        },
        jshint: {
          gruntfile: {
            options: {
              jshintrc: '.jshintrc'
            },
            src: 'Gruntfile.js'
          },
          src: {
            options: {
              jshintrc: 'src/.jshintrc'
            },
            src: ['src/**/*.js']
          },
          test: {
            options: {
              jshintrc: 'test/.jshintrc'
            },
            src: ['test/**/*.js']
          },
        },

        watch: {
          gruntfile: {
            files: '<%= jshint.gruntfile.src %>',
            tasks: ['jshint:gruntfile']
          },
          src: {
            files: '<%= jshint.app.src %>',
            tasks: ['jshint:src']
          },
          test: {
            files: '<%= jshint.test.src %>',
            tasks: ['jshint:test']
          },
        },

        connect: {
          development: {
            options: {
              keepalive: true,
            }
          },
          production: {
            options: {
              keepalive: true,
              port: 8000,
              hostname: 'localhost',
            }
          }
        },

        browserSync: {
            default: {
                bsFiles: {
                    src: [
                        "./src/css/*.css",
                        "./src/*.html",
                        "./src/js/*.js",
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./src"
                    }
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task.
    grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify']);
    grunt.registerTask('preview', ['connect:development']);
    grunt.registerTask("dev", ["browserSync", "watch"]);
};