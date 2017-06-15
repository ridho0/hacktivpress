const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

let index = require('./routes')

mongoose.connect('mongodb://localhost/hacktivpress');

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index)

app.listen(3000, () => {console.log('listening on port : 3000');})
