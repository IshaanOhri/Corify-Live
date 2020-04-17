const cron = require('node-cron');
const send = require('../notification/send');

console.log('cron-job initialized')

cron.schedule(('00 07 * * *'), async()=>{
    try{
        await send('start');
    }catch(e){
        
    }
},{
    scheduled : true,
    timezone : "Asia/Kolkata"
});