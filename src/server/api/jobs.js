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

router.post("/post_job", async (req, res) => {
    try {
      const {name_job, description_job, date_posted, work_location, available_positions, salary, photo_url} = req.body;
      res.json({});
      db.query(
        "INSERT INTO available_works (name, description, date_posted, work_location, available_positions, salary, photo_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name_job, description_job, date_posted, work_location, available_positions, salary, photo_url],
        (err, results) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
          } else {
            res.json(results);
          }
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });

module.exports = router;