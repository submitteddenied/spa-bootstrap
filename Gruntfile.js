function addFilenameBanner(src, filepath) {
  return '//*** ' + filepath + ' ***\n' + src;
}

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
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
        dest: '<%= dirs.build %>/js/<%= pkg.name %>.js'
      },
      dist: {
        src: '<%= dirs.src %>/js/**/*.js',
        dest: '<%= dirs.build %>/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      dev: {
        src: '<%= dirs.build %>/**/*',
        dest: '<%= dirs.target %>/dev/'
      },
      dist: {
        src: '<%= dirs.build %>/**/*',
        dest: '<%= dirs.target %>/dist/'
      }
    },
    clean: {
      build: ['<%= dirs.build %>'],
      dev: ['<%= dirs.target %>/dev/'],
      dist: ['<%= dirs.target %>/dist/']
    }
    
  });
  
  grunt.registerTask('spec', ['jasmine:spec']);
  grunt.registerTask('build:dev', ['concat:dev', 'copy:dev', 'clean:build']);
  grunt.registerTask('build:dist', ['concat:dist', 'copy:dist', 'clean:build']);
  grunt.registerTask('build', ['build:dev']);
  grunt.registerTask('default', ['spec', 'build:dev']);
};