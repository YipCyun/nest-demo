import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'item' })
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'float', default: 0 })
  age: number;

  @Column({ type: 'varchar', length: 200 })
  description: string;
}