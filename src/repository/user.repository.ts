import { User } from '../entityes/user.entityes';
import { getConnection } from 'typeorm';

export class UserRepository {
    
    static getAll() {
    return getConnection()
    .getRepository(User)
    .find();
  }

  static getById(id: number) {
    return getConnection()
    .getRepository(User)
    .findOne(id);
  }
  
  static create (user: User) {

    return getConnection()
    .getRepository(User)
    .insert(user);

  }

  static delete(id: number){
    return getConnection()
    .getRepository(User)
    .delete({
      id: id
    })
    
  }

  static update(id: number, user: Partial<User>){
    return getConnection()
    .getRepository(User)
    .update({
     id: id
    }, user)
    
  }


}