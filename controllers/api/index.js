const router = require('express').Router();
const userRoute = require('./userRoute');
const blogsRoute = require('./blogsRoute');

router.use('/user', userRoute);
router.use('./blog', blogsRoute);

module.exports = router;
