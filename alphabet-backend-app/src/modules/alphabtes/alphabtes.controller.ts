/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AlphabetService } from "./alphabtes.service";
import { Alphabet } from './../../entitys/alphabets.entity';

/**
 * Starting of AlphabetController 
 */
@Controller('aplhabet')
@ApiTags('aplhabet')
export class AlphabetController {
     constructor(
          private readonly alphabetService: AlphabetService,
     ) { }

     @Put('alphaToOne/:alphabet')
     async updateStatusToOne(@Param('alphabet') alphabet: string): Promise<any> {
          return await this.alphabetService.updateStatusToOne(alphabet);
     }

     @Put('alphaToZero/:alphabet')
     async updateStatusToZero(@Param('alphabet') alphabet: string): Promise<any> {
          return await this.alphabetService.updateStatusToZero(alphabet);
     }

     @Put('allToOne')
     async updateAllToOne(): Promise<any> {
          return await this.alphabetService.updateAllToOne();
     }

     @Put('allToZero')
     async updateAllToZero(): Promise<any> {
          return await this.alphabetService.updateAllToZero();
     }

     @Get('/getAllAlphabestOfOne')
     async getAllAlphabestOfOne() {
          return await this.alphabetService.getAllAlphabestOfOne();
     }

     @Get('/getAllAlphabestOfZero')
     async getAllAlphabestOfZero() {
          return await this.alphabetService.getAllAlphabestOfZero();
     }

     @Get('/getTaskById/:alphabet')
     async getTaskById(@Param('alphabet')alphabet: string) {
          return await this.alphabetService.getTaskById(alphabet);
     }

     @Post('/addTask/:alpha')
     addTasks(@Param('alpha') alpha: string){
          return this.alphabetService.addTasks(alpha)
     }
}
