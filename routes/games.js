var express = require('express');
var router = express.Router();
const gamesCtrl = require('../controllers/games');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', gamesCtrl.index)
router.get('/new', ensureLoggedIn, gamesCtrl.new)
router.get('/:id', gamesCtrl.show)
router.post('/', ensureLoggedIn, gamesCtrl.create)
router.delete('/:id', ensureLoggedIn, gamesCtrl.delete)
router.get('/:id/edit', ensureLoggedIn, gamesCtrl.edit)


module.exports = router;
