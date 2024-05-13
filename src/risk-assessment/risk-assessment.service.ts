import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities/client.entity';

@Injectable()
export class RiskAssessmentService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async assessRisk(request: any): Promise<any> {
    const {
      firstname,
      lastname,
      salary,
      financialSituation,
      age,
      loanAmount,
      loanDuration,
      loanPurpose,
      initialScore,
    } = request;
    const person = await this.clientRepository.findOne({ where: { firstname } });
    const response: any = {};
    if (person) {
      if (person.otherloans === 'no') {
        if (person.financialSituation === 'bad') {
          response.data = '35';
        } else if (parseInt(person.amount) < 5000) {
          response.data = '45';
        } else {
          response.data = '70';
        }
      } else {
        response.score = '20';
      }
    } else {
      response.score = 'No user by these credentials!';
    }
    return response;
  }
}
