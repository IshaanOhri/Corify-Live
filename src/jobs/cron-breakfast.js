const cron = require('node-cron');
const send = require('../notification/send');

console.log('cron-job initialized')

cron.schedule(('00 09 * * *'), async()=>{
    try{
        await send('breakfast');
    }catch(e){
        
    }
},{
    scheduled : true,
    timezone : "Asia/Kolkata"
});