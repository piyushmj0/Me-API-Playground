import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { skill } = req.query;

  const query = `
    SELECT DISTINCT p.*
    FROM projects p
    JOIN project_skills ps ON p.id = ps.project_id
    JOIN skills s ON ps.skill_id = s.id
    WHERE s.name ILIKE $1
  `;

  const { rows } = await pool.query(query, [`%${skill}%`]);
  res.json(rows);
});

export default router;
