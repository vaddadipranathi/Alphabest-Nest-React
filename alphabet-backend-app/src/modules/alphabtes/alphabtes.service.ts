/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alphabet } from 'src/entitys/alphabets.entity';
import { getConnection, Repository } from 'typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { DataNotFoundException, DataNotUpdated } from 'src/common/exception/customException.exception';
/**
 * Starting of AlphabetService service
 */
@Injectable()
export class AlphabetService {
   constructor(
      @InjectRepository(Alphabet)
      private alphabetRepository: Repository<Alphabet>,
      private logger: Logger,
   ) { }

   /**
    * 
    * @param alphabet accepts param  alphabet of type string
    * @returns result if status gets updated succesfully
    */
   async updateStatusToOne(alphabet: string) {
      const alpha = new Alphabet();
      const id = await this.getTaskById(alphabet)
      alpha.status = true;
      alpha.alphabet = alphabet;
      const result = await this.alphabetRepository.update(id, alpha);
      if (result) {
         this.logger.log('task status got updated succesfully');
         return result;
      } else {
         this.logger.error('task status not got updated succesfully');
         throw new DataNotUpdated();
      }
   }

   /**
    * 
    * @param alphabet accepts param  alphabet of type string
    * @returns if task found sucessfuly
    */
   async getTaskById(alphabet: string): Promise<Alphabet> {
      return await this.alphabetRepository.findOne({
         alphabet: alphabet,
      })
   }

   /**
    * 
    * @param alphabet accepts param  alphabet of type string
    * @returns result if status gets updated succesfully
    */
   async updateStatusToZero(alphabet: string) {
      const alpha = new Alphabet();
      const id = await this.getTaskById(alphabet)
      alpha.status = false;
      alpha.alphabet = alphabet;
      const result = await this.alphabetRepository.update(id, alpha);
      if (result) {
         this.logger.log('task status got updated succesfully');
         return result;
      } else {
         this.logger.error('task status not got updated succesfully');
         throw new DataNotUpdated();
      }
   }

   /**
    * 
    * @returns result if status gets updated succesfully
    */
   async updateAllToOne() {
      return await getConnection().createQueryBuilder()
         .update(Alphabet)
         .set({ status: true, })
         .where("status = :status", { status: false })
         .execute();
   }

   /**
    * 
    * @returns result if status gets updated succesfully
    */
   async updateAllToZero() {
      return await getConnection().createQueryBuilder()
         .update(Alphabet)
         .set({ status: false, })
         .where("status = :status", { status: true })
         .execute();
   }

   /**
    * 
    * @returns result if result found succesfully
    */
   async getAllAlphabestOfZero() {
      const result = await this.alphabetRepository.find({
         status: false
      })
      if (result) {
         this.logger.log('task details got retrived succesfully');
         return result;
      } else {
         this.logger.error('task details not retrived ');
         throw new DataNotFoundException();
      }
   }

   /**
   * 
   * @returns result if result found succesfully
   */
   async getAllAlphabestOfOne() {
      const result = await this.alphabetRepository.find({
         status: true
      })
      if (result) {
         this.logger.log('task status got updated succesfully');
         return result;
      } else {
         this.logger.error('task status not got retrived ');
         throw new DataNotFoundException();
      }
   }

   /**
    * 
    * @param alpha accepts param of type alphabet
    * @returns a promise Promise<Alphabet>
    */
   async addTasks(alpha:string){
      const alphabet=new Alphabet();
      alphabet.alphabet=alpha;
      // alphabet.status=false;
      return this.alphabetRepository.save(alphabet);
   }
}