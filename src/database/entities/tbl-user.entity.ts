import { AbstractEntity } from "src/common/abstract/entity.abstract"
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    OneToOne,
    Tree,
    TreeChildren,
    TreeParent,
} from "typeorm"

@Entity('TblUser')
@Tree("materialized-path")
export class TblUser extends AbstractEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    userAccount: string;

    @Column({ select: false })
    userPassword: string;

    @Column({ nullable: true })
    isActive: boolean;
}