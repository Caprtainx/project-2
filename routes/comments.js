var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/games/:id/comments', ensureLoggedIn, commentsCtrl.create)
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);
router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update)
// router.get('/comments/:id/edit', ensureLoggedIn, commentsCtrl.edit)

module.exports = router;