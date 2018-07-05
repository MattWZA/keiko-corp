module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            main: {
                src: 'js/main.js',
                dest: 'js/main.min.js'
            },
            parallax: {
                src: 'js/parallax.js',
                dest: 'js/parallax.min.js'
            }
        },

        cssmin: {
            main: {
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);

};