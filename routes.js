/**
 * Main application routes
 */
const healthcheck = require('./api/healthcheck');
const job = require('./api/job');
const user = require('./api/user');

function routes(app) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/jobs', job);
  app.use('/api/users', user);
}

module.exports = routes;
