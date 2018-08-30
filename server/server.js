const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const getCookies = require('./routes/convertRate')

const server = express()

server.use(bodyParser.json())
server.use(cors({origin: 'http://localhost:3000'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/project', getCookies)

module.exports = server