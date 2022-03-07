/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { Alphabet } from 'src/entitys/alphabets.entity';
import { AlphabetController } from './alphabtes.controller';
import { AlphabetService } from './alphabtes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Alphabet])],
  providers: [AlphabetService,Logger],
  controllers: [AlphabetController]

})
export class AlphabetModule {}
