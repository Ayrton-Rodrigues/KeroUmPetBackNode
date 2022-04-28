import UserService from "./user.service";
import { userModel } from "../models/user.model";
import { PetModel } from "../models/pet.model";

export class PetService {

  petList: Array<PetModel> = [
    {
      ownerId: 1,
      id: 1,
      name: "Ralf",
      description: "Cachorro Pulador",
      age: 14,
    },

    {
      ownerId: 1,
      id: 2,
      name: "Rex",
      description: "Cachorro ",
      age: 14,
    },

    {
      ownerId: 1,
      id: 3,
      name: "Rexona",
      description: "Cachorro",
      age: 4,
    },

    {
      ownerId: 2,
      id: 1,
      name: "Miucha",
      description: "Gata",
      age: 14,
    },

    {
      ownerId: 2,
      id: 2,
      name: "Laura",
      description: "Gata ",
      age: 14,
    },
  ];

  getAllPets() {
    return this.petList;
  }

  getPetsByOwnerId(id: number){
    return this.petList.filter((pets) => pets.ownerId === id)
  }

  getPetById(id: number, idPet: number) {
    return this.petList.find(
      (index) => index.ownerId === id && index.id === idPet
    );
  }

  createPet(petBody: PetModel) {
    return this.petList.push(petBody);
  }

  getPetByFindIndex(id: number, idPet: number) {
    return this.petList.findIndex((index) => index.ownerId === id && index.id === idPet);
  }

  updatePet(id: number, idPet: number, petBody: PetModel) {
   
    const pet = this.getPetById(id, idPet)

    if(pet)
    pet.id = petBody.id,
    pet.name = petBody.name,
    pet.description = petBody.description,
    pet.age = petBody.age;

  }

  deletePet(idPet: number) {

    return this.petList.splice(idPet, 1);
  }
}
export default new PetService();
