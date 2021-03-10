const router = require('express').Router();
const { validateUser } = require('../middlewares/celebrateValidation');
const { getUser, updateUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', validateUser, updateUser);

module.exports = router;
