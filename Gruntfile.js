module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            expanded: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto'
                },
                files: {
                    'dist/mini-material.css': 'src/mini-material.scss'
                }
            },
            compressed: {
                options: {
                    style: 'compressed',
                    sourcemap: 'auto'
                },
                files: {
                    'dist/mini-material.min.css': 'src/mini-material.scss'
                }
            },
        },

        autoprefixer: {
            dist: {
                options: {
                    map: true
                },
                files:{
                    'dist/mini-material.css': 'dist/mini-material.css',
                    'dist/mini-material.min.css': 'dist/mini-material.min.css'
                }
            }
        },

        scsslint: {
            dev: [
                'src/**/*.scss',
            ],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: true
            },
        },

        watch: {
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass:compressed'],
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
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('dist', ['sass', 'autoprefixer']);
    grunt.registerTask('lint', ['scsslint']);
    grunt.registerTask('dev', ['watch']);

};