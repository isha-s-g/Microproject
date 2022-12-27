const {merojobscontrol,jobsnepalcontrol} = require('../controller/JobController')
const express = require('express')
const router = express.Router();
router.route('/get-all-jobs-from-jobsnepal').get(merojobscontrol);
router.route('/get-all-jobs-from-merojobs').get(jobsnepalcontrol);
module.exports = router;
