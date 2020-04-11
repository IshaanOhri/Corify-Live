const express = require('express')
const fetch = require('node-fetch')
const path = require('path')

const router = new express.Router()

router.get('/data',async(req, res)=>{
    try{
        const data = await fetch('https://covidvisualizer.com/api')
        const obj = await data.json()
        res.send(obj)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/black.svg',async(req, res)=>{
    // res.redirect('https://covidvisualizae.com/assets/map.svg)        
    //still produce cross origin error as browser is redirected
    res.sendFile(path.join(__dirname,'../../public/assets/map.svg'))
})

router.get('/share',(req, res)=>{
    res.sendFile(path.join(__dirname,'../../public/assets/share.png'))
})

module.exports = router