const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/available_jobs', async (req, res) => {
    try {
        db.query('SELECT * FROM available_works', (err, results) => {
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



// router.post('/available_works', async (req, res) => {
//     try {

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

module.exports = router;