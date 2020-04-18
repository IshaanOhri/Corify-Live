const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

const call = async() => {

    const state_data = await fetch('https://api.covid19india.org/data.json');

    await fs.writeFile(path.join(__dirname,'../state_data.json'),JSON.stringify(state_data),()=>{
        console.log('state saved');
    });
};

module.exports = call;