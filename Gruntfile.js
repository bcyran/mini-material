module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            expanded: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/css/mini-material.css': 'src/mini-material.scss'
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/mini-material.min.css': 'src/mini-material.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files:{
                    'dist/css/mini-material.css': 'dist/css/mini-material.css',
                    'dist/css/mini-material.min.css': 'dist/css/mini-material.min.css'
                }
            }
        },

        csso: {
            compressed: {
                options: {
                    report: 'min',
                },
                files:{
                    'dist/css/mini-material.min.css': 'dist/css/mini-material.min.css'
                }
            }
        },

        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass:expanded'],
                options: {
                    spawn: false,
                }
            },

            livereload: {
                options: { livereload: true },
                files: ['dist/**/*'],
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('dist', ['sass:expanded', 'sass:compressed', 'autoprefixer', 'csso:compressed']);
    grunt.registerTask('dev', ['watch']);

};