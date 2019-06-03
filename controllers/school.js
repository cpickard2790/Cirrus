const express = require('express');
const router = express.Router();
const schoolList = require('../models/schools');

router.get('/get', (req, res, next) => {
    schoolList.find({}, (err, schools) => {
        if(err) {
            res.json({success: false, message: `Failed to load schools. Error ${err}`});
        }
        else {
            res.json(schools)
        }
    });
});

router.get('/getMarker', (req, res, next) => {
    schoolList.find({}, {marker: 1}, (err, markers) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(markers);
        }
    })
})


module.exports = router;