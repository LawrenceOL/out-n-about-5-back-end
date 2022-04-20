const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const LocationRouter = require('./routes/LocationRouter')
const UserRouter = require('./routes/UserRouter')
const TaskRouter = require('./routes/TaskRouter')
const ActivityRouter = require('./routes/ActivityRouter')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/user', UserRouter)
app.use('/location', LocationRouter)
app.use('/task', TaskRouter)
app.use('/activity', ActivityRouter)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
