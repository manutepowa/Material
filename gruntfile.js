module.exports = function(grunt){
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	    uglify: {
	      js: {
	        files: [{
	          cwd: 'site_map/js/',
	          expand: true,
	          src: ['*.js', '!*.min.js'],
	          dest: 'site_map/distjs/',
	          ext: '.min.js'
	        }]
	      }
	    },

	    cssmin:{
	    	target: {
		    files: [{
		      expand: true,
		      cwd: 'site_map/css/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'site_map/distcss/',
		      ext: '.min.css'
		    }]
		  }
	    }

    });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);
};