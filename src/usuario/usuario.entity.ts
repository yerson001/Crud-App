import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;


    @Column({default:true})
    activo: boolean;
}