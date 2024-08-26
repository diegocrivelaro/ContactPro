import type { Request, Response } from "express";

class ContactController {
  async index(req: Request, res: Response) {
    // Listagem de todos os contatos

    res.json({
      status: 200,
      message: "Success",
      data: [],
    });
  }
  async show(req: Request, res: Response) {
    // Obter um contato
  }
  async store(req: Request, res: Response) {
    // Criar um contato
  }
  async update(req: Request, res: Response) {
    // Editar um contato
  }
  async delete(req: Request, res: Response) {
    // Deletar um contato
  }
}

// Singleton pattern
export default new ContactController();
