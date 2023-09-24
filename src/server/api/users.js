const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        db.query('SELECT * FROM users', (err, results) => {
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