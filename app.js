const path = require('path')
const express = require('express')
const indexRoute = require('./src/routers/index.router')
const app = express()

global.__basedir = __dirname;

app.use(express.static(path.join(__dirname,'/uploads')))

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

indexRoute(app)

module.exports = app;