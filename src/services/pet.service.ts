import UserService from "./user.service";
import { userModel } from "../models/user.model";
import { PetModel } from "../models/pet.model";

export class PetService {

  petList: Array<PetModel> = [
    {
      ownerId: 1,
      id: 1,
      name: "Ralf",
      description: "Cachorro",
      age: 14,
      img: 'https://t1.ea.ltmcdn.com/pt/posts/7/0/3/12_coisas_que_voce_nunca_deve_fazer_com_seu_cachorro_23307_600.jpg'
    },

    {
      ownerId: 1,
      id: 2,
      name: "Rex",
      description: "Cachorro ",
      age: 14,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTRbGPT6_6eimvdmkBPAmqfgT-89HIAHhbA&usqp=CAU'
    },

    {
      ownerId: 1,
      id: 3,
      name: "Rexona",
      description: "Cachorro",
      age: 4,
      img: 'https://blog.finofaro.com.br/wp-content/uploads/2018/03/Os-cachorros-vira-latas-mais-bonitos-e-fofos-e1521296708633.jpg'
    },

    {
      ownerId: 2,
      id: 1,
      name: "Miucha",
      description: "Gata",
      age: 14,
      img: 'https://image.cachorrogato.com.br/textimages/nomes-para-felinos.jpg'
    },

    {
      ownerId: 2,
      id: 2,
      name: "Laura",
      description: "Gata ",
      age: 14,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGS621q4gtd9bpkrppq0Fht0UCD2tydMFwNpeyqKt5ECndZmykIShazSgYgnfQsNahF0&usqp=CAU'
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
