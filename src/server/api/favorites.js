const express = require("express");
const db = require("../database/db");
const router = express.Router();

router.get("/favorites", async (req, res) => {
  try {
    db.query(
      `SELECT available_works.*
        FROM available_works
        INNER JOIN favorites ON available_works.id = favorites.available_works_id`,
      (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Server error" });
        } else {
          console.log(results);
          res.json(results);
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/add_favorites", async (req, res) => {
  try {
    const data = req.body;

    db.query(
      "INSERT INTO favorites (available_works_id) VALUES (?)",
      [data.id],
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

router.post("/delete_favorites", async (req, res) => {
  try {
    const data = req.body;

    db.query(
      "DELETE from favorites WHERE available_works_id = (?)",
      [data.id],
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
