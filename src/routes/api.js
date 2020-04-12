const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')

const call = async()=>{
    try{
        const data = await fetch('https://covidvisualizer.com/api')
        const obj = await data.json()
        await fs.writeFile(path.join(__dirname,'../response.json',),JSON.stringify(obj),()=>{
            console.log('saved')
        })
    }catch(e){
    }
}

module.exports = call