function addFilenameBanner(src, filepath) {
  return '//*** ' + filepath + ' ***\n' + src;
}

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: "src",
      build: "build",
      target: "target"
    },
    jasmine: {
      spec: {
        src: "src/js/**/*.js",
        options: {
          specs: "spec/**/*.js"
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dev: {
        options: {
          process: addFilenameBanner
        },
        src: '<%= dirs.src %>/js/**/*.js',
        dest: '<%= dirs.target %>/dev/js/<%= pkg.name %>.js'
      },
      dist: {
        src: '<%= dirs.src %>/js/**/*.js',
        dest: '<%= dirs.target %>/dist/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      
    }
  });
  
  grunt.registerTask('spec', ['jasmine:spec']);
  grunt.registerTask('default', ['spec']);
};