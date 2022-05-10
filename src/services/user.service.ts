import { userModel } from "../models/user.model";
import { UserRepository } from "../repository/user.repository";
class UserService {


// teste para login

  user: Array<userModel> = [
    {
      id: 1,
      name: "admin",
      email: "admin@gmail.com",
      cnpj: "11.222.333/0001-22",
      district: "Andarai",
      password: "123456",
    },

    {
      id: 2,
      name: "Pets",
      email: "tester@gmail.com",
      cnpj: "11.222.333/0001-22",
      district: "Andarai",
      password: "123456",
    },
  ];

  getUsers(){
    return this.user;
  }

// teste para login 




  getAllUser() {
    return UserRepository.getAll();
  }

  getUserById(id: number) {
    return UserRepository.getById(id);
  }

  create(userBody: userModel) {
    return UserRepository.create(userBody);
  }

  update(id: number, body: userModel) {
    return UserRepository.update(id, body);
  }

  removeUser(id: number) {
    return UserRepository.delete(id);
  }
}
export default new UserService();

// XX.XXX.XXX/0001-XX
