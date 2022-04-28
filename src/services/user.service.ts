
import { userModel } from "../models/user.model";
class UserService {
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

  getAllUser() {
    return this.user;
  }

  getUserById(id: number) {
    return this.user.find((user) => user.id === id);
  }

  create(userBody: userModel) {
    this.user.push(userBody);
  }

  getByFindIndex(id: number) {
    return this.user.findIndex((user) => user.id === id);
  }

  update(id: number, body: userModel) {
    this.user[id] = {
      id: body.id,
      name: body.name,
      email: body.email,
      cnpj: body.cnpj,
      district: body.district,
      password: body.password,
    
    };
  }

  deleteUser(id: number) {
    return this.user.splice(id, 1);
  }
}
export default new UserService();

// XX.XXX.XXX/0001-XX
