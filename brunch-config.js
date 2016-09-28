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
        'vendor.js': /^bower_components/,
        'app.js': /^src/
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
    }
  }
};
