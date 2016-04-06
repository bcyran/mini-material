module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            expanded: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'dist/mini-material.css': 'src/mini-material.scss'
                }
            },
            compressed: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'dist/mini-material.min.css': 'src/mini-material.scss'
                }
            },
            gh: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'css/style.css': 'src/style.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files:{
                    'dist/mini-material.css': 'dist/mini-material.css',
                    'dist/mini-material.min.css': 'dist/mini-material.min.css'
                }
            }
        },

        csso: {
            compressed: {
                options: {
                    report: 'min',
                },
                files:{
                    'dist/mini-material.min.css': 'dist/mini-material.min.css'
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
            gh: {
                files: ['src/style.scss'],
                tasks: ['sass:gh'],
                options: {
                    spawn: true,
                }
            },
            livereload: {
                options: { livereload: true },
                files: ['**/*.css', '**/*.html'],
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('dist', ['sass:compressed', 'autoprefixer', 'csso:compressed']);
    grunt.registerTask('dev', ['watch']);

};