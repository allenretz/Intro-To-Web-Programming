module.exports = function(grunt){

    grunt.initConfig({
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: '.',
                src: ['**/*.css', '!**/*.min.css'],
                dest: '.',
                ext: '.min.css'
              }]
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('default', function(){
        console.log("default text");
    });

};




