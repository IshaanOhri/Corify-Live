const cron = require('node-cron');
const send = require('../notification/send');

console.log('cron-job initialized')

cron.schedule(('* */2 * * *'), async() => {          //running a task every two hours
    try{
        await send('misc');
    }catch(e){
        console.log(e);
    }
});