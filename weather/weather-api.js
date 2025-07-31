var http = require('https'), // Changed from 'http' to 'https'
  forecastData = require('./response.json')

http.createServer(function(request, response){
  response.end(JSON.stringify(forecastData))
}).listen(3000)
