const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')
const Pusher = require('pusher')

const pusher = new Pusher({
    appId: '980921',
    key: '9c724564ee194a941319',
    secret: 'b7617b5f739206061d00',
    cluster: 'ap2',
    encrypted: true
})

// const sample = {
//     name : 'akshit',
//     age : 19,
//     city : 'delhi'
// }

const call = async()=>{
    const data = await fetch('https://covidvisualizer.com/api')
    const obj = await data.json()

    const data2  = fs.readFileSync(path.join(__dirname,'../response.json'))
    const save_obj = JSON.parse(data2)

    if(obj.worldwide.reports !== save_obj.worldwide.reports){
        await fs.writeFile(path.join(__dirname,'../response.json'),JSON.stringify(obj),()=>{
            // console.log('saved')
            // console.log('pusher-triggered')
            pusher.trigger('data-changed', 'corona-cases', {
                "message" : "hello world",
            })
        })
    }
}

module.exports = call