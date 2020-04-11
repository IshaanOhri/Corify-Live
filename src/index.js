const express = require('express')
const resource = require('./routes/resource')
const path = require('path')

const port = process.env.PORT || 3000
const app = new express()

//json body parser
app.use(express.json())

//website middle-ware
app.use(express.static(path.join(__dirname,'../public')))

//routes middle-ware
app.use('/resource',resource)


app.listen(port,()=>console.log(`server is fired up at port ${port}`))