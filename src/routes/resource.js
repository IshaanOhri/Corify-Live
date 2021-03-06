const express = require('express')
const fetch = require('node-fetch')
const path = require('path')

const router = new express.Router()

router.get('/data',async(req, res)=>{
   res.sendFile(path.join(__dirname,'../response.json'))
})

router.get('/black.svg',async(req, res)=>{
    // res.redirect('https://covidvisualizae.com/assets/map.svg)        
    //still produce cross origin error as browser is redirected
    res.sendFile(path.join(__dirname,'../server_assets/map.svg'))
})

router.get('/share',(req, res)=>{
    res.sendFile(path.join(__dirname,'../server_assets/share.png'))
})

router.get('/apk', (req, res) => {
    res.download(path.join(__dirname,'../server_assets/corify.apk'));
})

module.exports = router