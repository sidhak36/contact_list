module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:8000', 'http://localhost:8000/contacts'],
        startServerCommand: 'npm run start'
      },
      upload: {
        target: 'temporary-public-storage'
      },
    },
  };