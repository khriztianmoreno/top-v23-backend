/**
 * Main application routes
 */
const healthcheck = require('./api/healthcheck');
const company = require('./api/company');
const job = require('./api/job');
const user = require('./api/user');
const authLocal = require('./auth/local');

function routes(app) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/companies', company);
  app.use('/api/jobs', job);
  app.use('/api/users', user);

  // auth routes
  app.use('/auth/local', authLocal);
  // app.use('/auth/facebook', facebook);
  // app.use('/auth/google', google);
}

module.exports = routes;
