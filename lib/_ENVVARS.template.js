var _ = require('lodash')

process.env = _.defaults(process.env, {
  NODE_ENV            : "development",
  FORECAST_IO_API_KEY : "<your api key here>",
  DATABASE_URL        : "postgres://postgres:postgres@localhost:5432"
})