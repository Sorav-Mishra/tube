import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

// comman middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: "true", limit: "16kb" }));
app.use(express.static("public"));

// routes decration

import userRouter from "./src/routes/user.routes.js";
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("api is running");
});
export { app };
