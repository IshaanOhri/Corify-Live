const cron = require('node-cron');
const send = require('../notification/send');

console.log('cron-job initialized')

cron.schedule(('00 20 * * *'), async()=>{
    try{
        await send('dinner');
    }catch(e){
        
    }
},{
    scheduled : true,
    timezone : "Asia/Kolkata"
});