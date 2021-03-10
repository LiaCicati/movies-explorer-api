const router = require('express').Router();
const { validateUser, validateUserRegister } = require('../middlewares/celebrateValidation');

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { login, createUser, logout } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);
router.post('/signup', validateUserRegister, createUser);
router.post('/signin', validateUser, login);
router.post('/signout', logout);
module.exports = router;
