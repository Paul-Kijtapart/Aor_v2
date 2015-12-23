module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['<%= jshint.all %>'],
            tasks: ['jshint']
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
                dest: 'dist/built.js',
            },
        },
        uglify: {
            dist: {
                files: {
                    'dist/app.js': ['dist/app.js']
                },
                options: {
                    mangle: false
                }
            }
        },
        jshint: {
            // which files the task should operate:
            all: ['Gruntfile.js', 'www/js/*.js'],
        },
        karma: {
            options: {
                configFile: 'config/karma.conf.js'
            },
            unit: {
                configFile: 'karma.conf.js',
                port: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['jshint']);

};
