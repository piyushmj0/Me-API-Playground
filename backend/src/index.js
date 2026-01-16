import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "./routes/health.js";
import profileRoutes from "./routes/profile.js";
import projectRoutes from "./routes/projects.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/profile", profileRoutes);
app.use("/projects", projectRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running")
);
