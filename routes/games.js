var express = require('express');
const games = require('../controllers/games');
var router = express.Router();
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index)
router.get('/new', gamesCtrl.new)
router.post('/', gamesCtrl.create)


module.exports = router;
