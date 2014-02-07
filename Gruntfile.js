module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      spec: {
        src: "src/js/**/*.js",
        options: {
          specs: "spec/**/*.js"
        }
      }
    }
  });
  
};