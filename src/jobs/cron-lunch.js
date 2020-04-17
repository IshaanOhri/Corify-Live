const cron = require('node-cron');
const send = require('../notification/send');

console.log('cron-job initialized')

cron.schedule(('00 14 * * *'), async()=>{
    try{
        await send('lunch');
    }catch(e){

    }
},{
    scheduled : true,
    timezone : "Asia/Kolkata"
});