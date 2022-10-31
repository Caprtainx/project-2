var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/games/:id/reviews', reviewsCtrl.create)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;