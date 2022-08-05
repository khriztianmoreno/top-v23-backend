import 'dotenv/config'
import express  from 'express'

import configExpress from './config/express.js'
import routesConfig from './routes.js'
import connectDatabase from './config/database.js'

const app = express()

const PORT = process.env.PORT || 8080
const NODE_ENV = process.env.NODE_ENV || 'development'

app.listen(PORT, async () => {
  // Configure express
  configExpress(app)

  // Connect to database
  await connectDatabase()

  // Configure routes
  routesConfig(app)

  console.log(`Server running on port http://localhost:${PORT} in ${NODE_ENV} mode`)
})
