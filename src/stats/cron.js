const cron = require('node-cron');
const call = require('./api');

console.log('cron-job initialized');

cron.schedule('*/10 * * * *',async()=>{
    try{
        await call();
    }catch(e){
        console.log(e);
    }
});