const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/available_jobs', async (req, res) => {
    try {
        db.query('SELECT id, name, description, date_posted, photo_url FROM available_works', (err, results) => {
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