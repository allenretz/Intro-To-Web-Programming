module.exports = function(grunt){

    grunt.initConfig({
        watch: {
            html: {
                files: ['*/index.html'],
                tasks: ['newIndexPage'],
            },
        },
    });
       
    //HTML
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //Image Tasks
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //SASS
    grunt.loadNpmTasks('grunt-contrib-compass');
    //CSS
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //JS
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //General
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
            
    // HTML TASKS
    grunt.registerTask('updateIndexPage',function(){
    
        console.log('Updating The Directory Page');
        //Todo Implement
    });

    grunt.registerTask('minifyHTML', ['htmlmin');


    // IMAGE TASKS
    grunt.registerTask('minifyImages', 'imageMin');


    // SASS TASKS
    grunt.registerTasks('compileSASS', ['compass']);


    // CSS TASKS
    grunt.registerTasks('lintCSS',    'csslint');
    grunt.registerTasks('prefixCSS',  'autoprefixer');
    grunt.registerTasks('minifyCSS',  'cssmin');

   
    // JS TASKS
    grunt.registerTask('minifyJS', ['uglify']);

    // General TASKS

//grunt-minimal-config




    
    grunt.registerTask('HTMLTasks',   ['miniyfHTML','updateIndexPage']); 
    grunt.registerTask('ImageTasks',  ['minifyImages']);
    grunt.registerTask('SASSTasks',   ['compileSASS']);   
    grunt.registerTask('CSSTasks' ,   ['lintCSS', 'prefixCSS', 'minifyCSS']);
    grunt.registerTask('JSTasks',     ['minifyJS']);
    grunt.registerTask('GeneralTasks',['']);
    grunt.registerTask('default',     ['htmlTasks', 'watch']);

    
};
