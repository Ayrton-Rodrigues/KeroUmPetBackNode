import UserService from "./user.service";
import { userModel } from "../models/user.model";
import { PetModel } from "../models/pet.model";
import userService from "./user.service";

export class PetService {
  userList: Array<userModel> = UserService.getAllUser();

  getPetById(id: number, idPet: number) {
    return this.userList[id].pet?.find((index) => index.id === idPet);
  }

  createPet(id: number, petBody: PetModel) {
    return this.userList[id].pet.push(petBody);
  }

  getPetByFindIndex(id: number, idPet: number) {
    return this.userList[id].pet?.findIndex((pet) => pet.id == idPet);
  }

  updatePet(id: number, idPet: number, petBody: PetModel) {
    const pet = this.userList[id].pet[idPet];

    (pet.id = petBody.id),
      (pet.name = petBody.name),
      (pet.description = petBody.description),
      (pet.age = petBody.age);

    // console.log(`mostra: ${this.userList[id].id}`)
  }

  deletePet(id: number, idPet: number) {
    console.log(`service: ${id} ${idPet}`);

    return userService.user[id].pet?.splice(idPet, 1);
    // const petId = this.getPetByFindIndex(id, idPet)
    // console.log(`service: ${petId}`)
  }
}
export default new PetService();
