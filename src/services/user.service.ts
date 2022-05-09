import { userModel } from "../models/user.model";
import { UserRepository } from "../repository/user.repository";
class UserService {
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
