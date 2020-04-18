const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

const call = async() => {

    const data_india = await fetch('https://newsapi.org/v2/top-headlines?apiKey=4af34a615f854c2da860a581d4b899d8&country=in&q=covid');
    const obj_india = await data_india.json();

    await fs.writeFile(path.join(__dirname,'../news_india.json'),JSON.stringify(obj_india),()=>{
        console.log('india saved');
    });

    const data_world = await fetch('https://newsapi.org/v2/top-headlines?apiKey=4af34a615f854c2da860a581d4b899d8&q=covid&language=en');
    const obj_world = await data_world.json();

    await fs.writeFile(path.join(__dirname,'../news_world.json'), JSON.stringify(obj_world),()=>{
        console.log('world saved')
    });
};

module.exports = call;