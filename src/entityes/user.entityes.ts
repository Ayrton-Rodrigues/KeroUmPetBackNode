import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({name: 'name', type: 'varchar', length: 50 })
    name?: string;

    @Column({name: 'email', type: 'varchar', length: 100 })
    email?: string;

    @Column({name: 'cnpj', type: 'varchar', length: 50 })
    cnpj?: string;   
    
     @Column({name: 'district', type: 'varchar', length: 50 })
    district?: string; 


    @Column({name: 'password', type: 'varchar', length: 15 })
    password?: string;      


    @Column({name: 'create_date', type: 'date' })
    createDate?: Date | string;


}