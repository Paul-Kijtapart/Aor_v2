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
            all: ['Gruntfile.js', 'js/*.js'],
        },
        bootlint: {
            options: {
                relaxerror: [],
                showallerrors: false,
                stoponerror: false,
                stoponwarning: false
            },
            files: ['index.html']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
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
    grunt.registerTask('default', ['karma']);

};
