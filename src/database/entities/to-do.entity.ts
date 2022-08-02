import { IsNotEmpty, IsString } from "class-validator";// check validator data boday FE truyền xuống ko check colum db
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable :false})
    name: string;

    @Column({nullable :false})
    description: string;

    @Column({default: true})
    isDone: boolean;

}