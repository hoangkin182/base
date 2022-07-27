import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Use for hidden all unnecessary column abstract when select all
 */
export abstract class AbstractEntity {
  @CreateDateColumn()
  createdOnDate: Date;

  @Column({ nullable: true })
  createdByUserId: string;

  @UpdateDateColumn()
  lastModifiedOnDate: Date;

  @Column({ nullable: true })
  lastModifiedByUserId: string;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;
}
