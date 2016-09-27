module.exports = {
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
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      },
      order: {
        before: [
          'app/**/*.module.js'
        ]
      }
    },

    stylesheets: {
      joinTo: 'app.css'
    },

    templates: {
      joinTo: {
        'templates.js': /^app/
      }
    }
  },

  plugins: {
    angular_templates: {
      path_transform: function (path) {
        return path.replace('app/javascript/', '');
      }
    }
  }
};
