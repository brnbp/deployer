#!/usr/bin/env node

const server = require('./app');
const PORT = 3004;

server.listen(PORT, function() {
  console.log('Server running on port: %d', PORT);
});
