import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '@user/entity/user.entity';

@Entity('activity')
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false }) name: string;
  @CreateDateColumn() createdAt?: Date;

  @ManyToOne((_type) => UserEntity)
  owner?: UserEntity;
}
