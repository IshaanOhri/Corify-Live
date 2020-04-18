const express = require('express');
const path = require('path');

const router = new express.Router();

router.get('/india',(req, res)=>{
    res.sendFile(path.join(__dirname,'../news_india.json'));
})

router.get('/world', (req, res)=>{
    res.sendFile(path.join(__dirname,'../news_world.json'));
})

module.exports = router;