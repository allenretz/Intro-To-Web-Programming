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
          },
	watch: {
		scripts: {
			files : ['**/*.css'],
			tasks : ['css'],
		}
	}
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('default', function(){
        console.log("default text");
    });

};




