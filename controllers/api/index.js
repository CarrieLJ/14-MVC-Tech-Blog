const router = require('express').Router();
const userRoute = require('./userRoute');
const dashboardRoute = require('./dashboardRoute');

router.use('/user', userRoute);
router.use('/dashboard', dashboardRoute);

module.exports = router;
