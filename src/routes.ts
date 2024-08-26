import { Router } from "express";

import ContactController from "./app/controllers/ContactController";

export const router = Router();

router.get("/ping", (req, res) => {
  res.json({ status: 200, message: "pong", timestamp: Date.now() });
});

router.get("/contacts", ContactController.index);
