import { config } from 'dotenv'

config()

export default {
  // application configurations
  appName: process.env.APP_NAME || '',
  appPort: process.env.APP_PORT || 3000,

  // database configurations
  databaseHost: process.env.DATABASE_HOST || '',
  databasePort: process.env.DATABASE_PORT || 3306,
  databaseName: process.env.DATABASE_NAME || '',
  databaseUser: process.env.DATABASE_USERNAME || 'root',
  databasePassword: process.env.DATABASE_PASSWORD || '',
}
