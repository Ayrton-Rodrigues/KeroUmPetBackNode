import { Router, Request, Response } from "express";
import UserService from "../services/user.service";
import PetService from "../services/pet.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const pets = PetService.getAllPets();
  if (!pets) {
    res.status(404).send("Não encontrado!");
  }
  res.status(200).send(pets);
});

router.get("/:id", (req: Request, res: Response) => {
  const petsOwner = PetService.getPetsByOwnerId(parseInt(req.params.id));
  if (!petsOwner) {
    res.status(404).send("Não encontrado!");
  }
  res.status(200).send(petsOwner);
});

router.get("/:id/:idPet", (req: Request, res: Response) => {
  const user = parseInt(req.params.id);
  const pets = PetService.getPetById(user, parseInt(req.params.idPet));

  if (!pets) {
    res.status(404).send("Não encontrado!");
  }
  res.status(200).send(pets);
});

router.post("/", (req: Request, res: Response) => {
  PetService.createPet(req.body);
  res.status(201).send("Criado com sucesso!");
});

router.put("/:id/:idPet", (req: Request, res: Response) => {
  const user = parseInt(req.params.id);
  const pet = parseInt(req.params.idPet);
  console.log(user, pet);
  PetService.updatePet(user, pet, req.body);

  res.send("criado");
});

router.delete("/:id/:idPet", (req: Request, res: Response) => {
  const ownerId = parseInt(req.params.id);
  const petId = PetService.getPetByFindIndex(
    ownerId,
    parseInt(req.params.idPet)
  );

  if (petId === -1) {
    res.status(404).send("não encontrado");
  } else {
    PetService.deletePet(petId);
  }
  res.status(200).send("sucesso");
});

export default router;
