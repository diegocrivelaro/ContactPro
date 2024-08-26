import { Router } from "express";

import ContactController from "./app/controllers/ContactController";

export const router = Router();

router.get("/ping", (req, res) => {
  res.json({ message: "pong", timestamp: Date.now() });
});

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
