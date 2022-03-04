/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString } from "class-validator";

/* eslint-disable prettier/prettier */

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
     * generates UserName column
     */
    @Column()
    @IsString()
    @ApiProperty()
    alphabet: string;


    /**
     * generates isActive column
     */
    @Column()
    @ApiProperty()
    status: boolean;


}