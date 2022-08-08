/**
 * Main application routes
 */
const healthcheck = require('./api/healthcheck/index.js');
const user = require('./api/user/index.js');

function routes(app) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
}

module.exports = routes;
