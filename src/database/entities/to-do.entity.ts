import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar',{nullable :false})
    @IsString()
    @IsNotEmpty()
    name: string;

    @Column('varchar',{nullable :false})
    @IsString()
    @IsNotEmpty()
    description: string;

    @Column('varchar',{nullable :false})
    isDone: boolean;

}