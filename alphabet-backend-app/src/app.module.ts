/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Alphabet } from './entitys/alphabets.entity';
import { AlphabetModule } from './modules/alphabtes/alphabtes.module';

@Module({
  imports: [
TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chelli1@',
      database: 'alphabet',
      entities: [Alphabet],
      synchronize: false,
    }),
    AlphabetModule
  ],
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
