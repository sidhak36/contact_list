module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:8000'],
        staticDistDir: './assets',
        startServerCommand: 'npm run start'
      },
      upload: {
        target: 'temporary-public-storage'
      },
    },
  };