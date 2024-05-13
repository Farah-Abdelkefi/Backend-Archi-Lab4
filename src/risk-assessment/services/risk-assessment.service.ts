// src/risk/risk.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities/client.entity';

@Injectable()
export class RiskService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async assessRisk(data: any): Promise<any> {
    const { firstname, lastname, financialSituation, loanAmount, initialScore } = data;
    const client = await this.clientRepository.findOne({ where: { firstname, lastname } });

    const response = {};
    if (client) {
      if (client.otherloans === 'no') {
        if (client.financialSituation === 'bad') {
          response['data'] = '35';
        } else if (parseInt(client.amount, 10) < 5000) {
          response['data'] = '45';
        } else {
          response['data'] = '70';
        }
      } else {
        response['score'] = '20';
      }
    } else {
      response['score'] = 'No user by these credentials!';
    }
    return response;
  }
}
