import express from 'express'
import { euro } from './routes'
import bodyParser from 'body-parser'
import validator from 'express-validator'
import { checkDate } from './tools'

const app = express()
app.use(bodyParser.json())
app.use(validator({
  customValidators: {
    isNiceDate: (date) => {
      return checkDate(date)
    }
  }
}))
app.get('/exchangerates/EUR', euro)

export default app