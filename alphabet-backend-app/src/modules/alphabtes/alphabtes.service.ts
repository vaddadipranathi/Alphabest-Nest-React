/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alphabet } from 'src/entitys/alphabets.entity';
import { getConnection, Repository } from 'typeorm';
/**
 * Starting of operationTypeCategory service
 */
@Injectable()
export class AlphabetService {
   constructor(
      @InjectRepository(Alphabet)
      private alphabetRepository: Repository<Alphabet>,
   ) { }

   async updateStatusToOne(alphabet: string) {
      const alpha = new Alphabet();
      const id = await this.getAlphabetById(alphabet)
      alpha.status = true;
      alpha.alphabet = alphabet;
      this.alphabetRepository.update(id, alpha);
   }

   async getAlphabetById(alphabet: string): Promise<Alphabet> {
      return await this.alphabetRepository.findOne({
         alphabet: alphabet,
      })
   }

   async updateStatusToZero(alphabet: string) {
      const alpha = new Alphabet();
      const id = await this.getAlphabetById(alphabet)
      alpha.status = false;
      alpha.alphabet = alphabet;
      this.alphabetRepository.update(id, alpha);
   }

   async updateAllToOne() {
      return await getConnection().createQueryBuilder()
         .update(Alphabet)
         .set({ status: true, })
         .where("status = :status", { status: false })
         .execute();
   }

   async updateAllToZero() {
      return await getConnection().createQueryBuilder()
         .update(Alphabet)
         .set({ status: false, })
         .where("status = :status", { status: true })
         .execute();
   }

   async getAllAlphabestOfZero() {
      return await this.alphabetRepository.find({
         status: false
      })
   }

   async getAllAlphabestOfOne() {
      return await this.alphabetRepository.find({
         status: true
      })
   }
}