/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

/**
 * starting of Alphabet Entity
 */
@Entity()
export class Alphabet {
  /**
   * auto incremental id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * generates alphabet column
   */
  @Column()
  @IsString()
  @ApiProperty()
  alphabet: string;

  /**
   * generates status column
   */
  @Column({ default: false })
  @ApiProperty()
  status: boolean;
}
