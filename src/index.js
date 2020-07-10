require('newrelic')
const express = require('express')
const resource = require('./routes/resource')
const path = require('path')
const news = require('./news/routes')
const states = require('./stats/routes')
require('./routes/cron')
require('./jobs/cron-start')
require('./jobs/cron-breakfast')
require('./jobs/cron-lunch')
require('./jobs/cron-dinner')
require('./jobs/cron-misc')
require('./news/cron')
require('./stats/cron')

const port = process.env.PORT
const app = new express()

//json body parser
app.use(express.json())

//website middle-ware
app.use(express.static(path.join(__dirname,'../public')))

//routes middle-ware
app.use('/resource',resource)
app.use('/news',news)
app.use(states)

app.use('/health', (req, res) => {
    res.send({
        success: true,
        message: 'Corify running successfully'
    })
})

app.use((req, res) => {
    res.redirect('/')
})

app.listen(port,()=>console.log(`server is fired up at port ${port}`))