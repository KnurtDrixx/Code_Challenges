import * as express from "express";
import * as fs from "fs";

const router = express.Router();

router.get("/api/JS_Solutions", (req, res, next) => {
  res.json("World");
});

export default router;
