import { Router, Request, Response } from "express";
import userService from "../services/user.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await userService.getAllUser();
  res.send(users);
});

router.get("/:id", async (req: Request, res: Response) => {
  const user = await userService.getUserById(parseInt(req.params.id));
  res.send(user);

  if (!user) {
    res.status(404).send("Não encontrado!");
  }
});

router.post("/", async (req: Request, res: Response) => {
  await userService.create(req.body);
  res.status(201).send("Criado com sucesso!");
});

router.put("/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  if (!userId) {
    return res.status(404).send("Não encontrado!");
  } else {
    userService.update(userId, req.body);
    res.status(200).send("Sucesso");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  if (!userId) {
    res.status(404).send("não encontrado");
  } else {
    await userService.removeUser(userId);
    res.status(200).send("sucesso");
  }
});

export default router;
