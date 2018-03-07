module.exports = function(grunt){

    grunt.initConfig({
        watch: {
            html: {
                files: ['*/index.html'],
                tasks: ['newIndexPage'],
            },
        },
    });
       
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
            

    grunt.registerTask('newIndexPage',function(){
    
        console.log('Updating The Directory Page');
        //Todo Implement
    });

    grunt.registerTask('jsMin', ['uglify']); // Alies


    grunt.registerTask('htmlTasks', ['newIndexPage'])
    grunt.registerTask('jsTasks',   ['jsMin'])
    grunt.registerTask('cssTasks' , ['newIndexPage'])
    grunt.registerTask('default',  ['htmlTasks', 'watch']);

    
};
