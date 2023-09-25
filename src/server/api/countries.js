const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/countries', async (req, res) => {
    try {
        db.query('SELECT country, phone_code FROM countries', (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Server error' });
            } else {
                console.log(results);
                res.json(results);
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;