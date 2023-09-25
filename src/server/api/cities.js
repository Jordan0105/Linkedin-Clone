const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/cities/:countryId', async (req, res) => {
    try {
        const countryId = req.params.countryId;

        db.query(`SELECT city FROM cities WHERE  country_code = ${countryId}`, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Server error' });
            } else {
                res.json(results);
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;