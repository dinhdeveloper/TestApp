const categoryRouter = require('./category.router')

function route(app){

    app.use('/api/category',categoryRouter)
}

module.exports = route