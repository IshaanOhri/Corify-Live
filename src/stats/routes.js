const express = require('express');
const path = require('path');

const router = new express.Router();

router.get('/states',(req, res)=>{
    res.sendFile(path.join(__dirname,'../state_data.json'));
})

module.exports = router;