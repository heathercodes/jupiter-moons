module.exports = {
    port: 8050,
    rewrite: [
      {
        from: '/api/*',
        to: 'http://api-server:8080/api/$1',
      }
    ],
    directory: 'src'
  }