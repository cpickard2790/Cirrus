const express = require('express');
const router = express.Router();
const schoolList = require('../models/schools');

router.get('/get', (req, res, next) => {
    schoolList.find({}, (err, schools) => {
        if(err) {
            res.json(err);
        }
        else {
            res.json(schools)
        }
    });
});

module.exports = router;