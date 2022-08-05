/**
 * Main application routes
 */
import healthcheck from './api/healthcheck/index.js'
import user from './api/user/index.js'

function routes(app) {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/users', user)
}

export default routes
