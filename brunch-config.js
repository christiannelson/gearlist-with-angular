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
  }
};
