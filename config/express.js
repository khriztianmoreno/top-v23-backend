import express  from 'express'
import morgan from 'morgan'

function configExpress(app) {
  // CORS
  app.use(express.json())
  app.use(morgan('dev'))
}

export default configExpress
