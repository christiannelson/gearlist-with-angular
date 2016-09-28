module.exports = {
  paths: {
    watched: ['src']
  },

  modules: {
    definition: false,
    wrapper: false
  },

  npm: {
    enabled: false
  },

  files: {
    javascripts: {
      joinTo: {
        'app.js': /^src/,
        'vendor.js': /^vendor/
      },
      order: {
        before: [
          'src/app/**/*.module.js'
        ]
      }
    },

    stylesheets: {
      joinTo: 'app.css',
      order: {
        before: [
          'src/styles/normalize.css'
        ]
      }
    },

    templates: {
      joinTo: {
        'templates.js': /^src\/app/
      }
    }
  },

  plugins: {
    angular_templates: {
      path_transform: function (path) {
        return path.replace('src/app/', '');
      }
    },

    jshint: {
      pattern: /^src[\\\/].*\.js$/
    }
  }
};
