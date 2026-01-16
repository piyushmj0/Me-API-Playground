import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM profile LIMIT 1");
  res.json(rows[0]);
});

router.put("/", async (req, res) => {
  const { name, email, education } = req.body;
  await pool.query(
    "UPDATE profile SET name=$1, email=$2, education=$3 WHERE id=1",
    [name, email, education]
  );
  res.json({ message: "Updated" });
});

export default router;
