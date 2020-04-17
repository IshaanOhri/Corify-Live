const cron = require('node-cron');
const send = require('../notification/send');

console.log('cron-job initialized')

cron.schedule(('0 07-23/2 * * *'), async() => {          //running a task every two hours
    try{
        await send('misc');
    }catch(e){
        console.log(e);
    }
});
