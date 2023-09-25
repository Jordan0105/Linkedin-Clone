const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/available_jobs/details/:jobId', async (req, res) => {
    try {
        const jobId = req.params.jobId;

        db.query(`SELECT * FROM available_works WHERE id = ${jobId}`, (err, results) => {
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