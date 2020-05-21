const express = require('express')
const router = express.Router()
const getColors  = require('./libs/getColors')
const getCoinList = require('./libs/getCoins')

router.get('/list', ( _, res ) => {
    const coinList = getCoinList()
    res.json( coinList )
});

router.get('/colors', ( req, res ) => {
    console.log(req.params)
    const args = req.params
    const coins = args ? args.split(',') : []
    const colors = getColors({ "coins": coins })
    res.json( colors )
});

module.exports = router