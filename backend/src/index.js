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

/* ✅ ROOT ROUTE */
app.get("/", (req, res) => {
  res.json({
    message: "Me-API Playground is running",
    endpoints: [
      "/health",
      "/profile",
      "/projects?skill=python"
    ]
  });
});

/* API ROUTES */
app.use("/health", healthRoutes);
app.use("/profile", profileRoutes);
app.use("/projects", projectRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
