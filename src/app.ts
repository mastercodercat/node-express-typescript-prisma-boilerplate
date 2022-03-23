import express from 'express'
import cors from 'cors'
import passport from 'passport'

import config from './config'
import routes from './routes'

import morgan from './middlewares/logger.middleware'
import Logger from './utils/logger.utils'

const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(cors())
app.use(passport.initialize())
app.use(morgan)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Successfully connected to api.' })
})

app.use('/api', routes)

const server = app.listen(config.appPort, () => {
  Logger.debug(`Server is up and running @ http://localhost:${config.appPort}`)
})

export default server
