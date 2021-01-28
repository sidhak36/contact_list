module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:8080'],
        staticDistDir: './assets',
        startServerCommand: 'npm run start'
      },
      upload: {
        target: 'temporary-public-storage'
      },
    },
  };