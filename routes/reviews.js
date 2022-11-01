var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/games/:id/reviews', ensureLoggedIn, reviewsCtrl.create)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);
router.put('/reviews/:id', reviewsCtrl.update)
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit)

module.exports = router;