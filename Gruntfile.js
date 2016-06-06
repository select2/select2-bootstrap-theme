module.exports = function(grunt) {
  // Load all grunt tasks.
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['tests/*_test.js']
    },

    sass: {
      options: {
        style: 'expanded',
        sourcemap: 'none',
        // Increase Sass' default (5) precision to 9 to match Less output.
        //
        // @see https://github.com/twbs/bootstrap-sass#sass-number-precision
        // @see https://github.com/sass/node-sass/issues/673#issue-57581701
        // @see https://github.com/sass/sass/issues/1122
        precision: 9
      },
      dist: {
        files: {
          'docs/css/select2-bootstrap.css': 'src/build.scss',
          'docs/_site/css/select2-bootstrap.css': 'src/build.scss',
          'dist/select2-bootstrap.css': 'src/build.scss'
        }
      },
      test: {
        files: {
          'tmp/select2-bootstrap.css': 'src/build.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/select2-bootstrap.min.css': 'dist/select2-bootstrap.css'
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', '*.json']
    },

    bump: {
      options: {
        files: [
          'package.json',
          'bower.json'
        ],
        push: false,
        createTag: false
      }
    },

    copy: {
      main: {
        files: [
          {
            src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
            dest: 'docs/css/bootstrap.min.css',
            expand: false
          },
          {
            src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
            dest: 'docs/js/bootstrap.min.js',
            expand: false
          },
          {
            src: 'bower_components/respond/dest/respond.min.js',
            dest: 'docs/js/respond.min.js',
            expand: false
          },
          {
            cwd: 'bower_components/bootstrap/dist/fonts',
            src: ['**/*'],
            dest: 'docs/fonts',
            expand: true
          },
          {
            src: 'bower_components/anchor-js/anchor.min.js',
            dest: 'docs/js/anchor.min.js',
            expand: false
          }
        ]
      }
    },

    'gh-pages': {
      options: {
        base: 'docs/_site',
        message: 'Update gh-pages.'
      },
      src: ['**/*']
    },

    jekyll: {
      options: {
        src: 'docs',
        dest: 'docs/_site',
        sourcemaps: false
      },
      build: {
        d: null
      }
    },

    watch: {
      sass: {
        files: 'src/select2-bootstrap.scss',
        tasks: ['sass']
      },
      jekyll: {
        files: ['docs/_layouts/*.html', 'docs/_includes/*.html', '*.html'],
        tasks: ['jekyll']
      }
    },

    browserSync: {
      files: {
        src : ['docs/_site/css/*.css']
      },
      options: {
        watchTask: true,
        ghostMode: {
          clicks: true,
          scroll: true,
          links: true,
          forms: true
        },
        server: {
          baseDir: 'docs/_site'
        }
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          // Autoprefixer browser settings as required by Bootstrap
          //
          // @see https://github.com/twbs/bootstrap-sass/tree/master/#sass-autoprefixer
          require('autoprefixer')({browsers: [
            "Android 2.3",
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 24",
            "Explorer >= 8",
            "iOS >= 6",
            "Opera >= 12",
            "Safari >= 6"
          ]})
        ]
      },
      dist: {
        src: [
          'docs/css/select2-bootstrap.css',
          'docs/_site/css/select2-bootstrap.css',
          'dist/select2-bootstrap.css'
        ]
      },
      test: {
        src: [
          'tmp/select2-bootstrap.css'
        ]
      }
    },

    scss2less: {
      convert: {
        files: [{
          src: 'src/select2-bootstrap.scss',
          dest: 'src/select2-bootstrap.less'
        }]
      }
    }

  });

  // Default tasks.
  grunt.registerTask('build', ['sass', 'postcss', 'cssmin', 'copy', 'jekyll:build']);
  grunt.registerTask('serve', ['build', 'browserSync', 'watch']);
};
