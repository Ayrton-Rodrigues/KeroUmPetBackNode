import { getMaxListeners } from "process";
import { PetModel } from "../models/pet.model";
import { userModel } from "../models/user.model";

class UserService {
      user: Array<userModel> = [
        {
          id: 1,
          name: "Salva Pets",
          email: "salvapet@gmail.com",
          cnpj: "11.222.333/0001-22",
          district: "Andarai",
          password: "123456",
          pet: [{
               id: 15,
               name: 'Ralf',
               description: 'Cachorro Pulador',
               age: 14,
           },

           {
            id: 21,
            name: 'Rex',
            description: 'Cachorro ',
            age: 14,
           },

           {
            id: 33,
            name: 'Rexona',
            description: 'Cachorro Matador',
            age: 4,
           },

          ]
        },

        {
          id: 2,
          name: "Pets",
          email: "salva@gmail.com",
          cnpj: "11.222.333/0001-22",
          district: "Andarai",
          password: "123456",
          pet: [{
               id: 1,
               name: 'Miucha',
               description: 'Gata',
               age: 14,
           },

           {
            id: 2,
            name: 'Laura',
            description: 'Gata ',
            age: 14,
           }

          ]
        },

      ]


      getAllUser() {
        return this.user
      }

      getUserById(id: number){
        return this.user.find((user) => user.id === id)
      }

      create(userBody: userModel){
        this.user.push(userBody)       
      }    
  

      getByFindIndex(id: number){
        return this.user.findIndex((user) => user.id === id)
      }

      update(id: number, body: userModel){       

          this.user[id] = {
            id: body.id,
            name: body.name,
            email: body.email,
            cnpj: body.cnpj,
            district: body.district,
            password: body.password,
            pet: []
          }

      }

      deleteUser(id: number){    
        return this.user.splice(id, 1)
      }
}
export default new UserService;

// XX.XXX.XXX/0001-XX