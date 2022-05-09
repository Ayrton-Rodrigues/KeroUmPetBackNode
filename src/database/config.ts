import { createConnection } from "typeorm";
import { User } from "../entityes/user.entityes";

export const connection = createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'sistema_keroumpet',
  entities: [
     User
  ],
  logging: true


})