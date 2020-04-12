const cron = require('node-cron')
const call = require('./api')

console.log('cron-job initialized')

cron.schedule('*/15 * * * *',async()=>{
    await call()
})