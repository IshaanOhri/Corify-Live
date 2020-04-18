const express = require('express')
const resource = require('./routes/resource')
const path = require('path')
const news = require('./news/routes')
require('./routes/cron')
require('./jobs/cron-start')
require('./jobs/cron-breakfast')
require('./jobs/cron-lunch')
require('./jobs/cron-dinner')
require('./jobs/cron-misc')
require('./news/cron')

const port = process.env.PORT || 80
const app = new express()

//json body parser
app.use(express.json())

//website middle-ware
app.use(express.static(path.join(__dirname,'../public')))

//routes middle-ware
app.use('/resource',resource)
app.use('/news',news)

app.listen(port,()=>console.log(`server is fired up at port ${port}`))