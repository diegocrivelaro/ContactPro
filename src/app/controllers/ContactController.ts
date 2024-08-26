import type { Request, Response } from "express";

import ContactRepository from "../repositories/ContactRepository";

class ContactController {
  async index(req: Request, res: Response) {
    const contacts = await ContactRepository.findAll();

    res.json({
      message: "Success",
      data: contacts,
    });
  }
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const contacts = await ContactRepository.findById(id);

    if (!contacts) {
      res.status(404).json({
        message: "Not Found",
        data: { id },
      });
      return;
    }

    res.json({
      message: "Success",
      data: contacts,
    });
  }
  async store(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const contacts = await ContactRepository.findById(id);

    if (!contacts) {
      res.status(404).json({
        message: "Not Found",
        data: { id },
      });
      return;
    }

    await ContactRepository.delete(id);

    res.sendStatus(204);
  }
}

export default new ContactController();
