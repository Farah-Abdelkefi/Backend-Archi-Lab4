/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities/client.entity'; 

@Controller('clients')
export class ClientController {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  @Post()
  async create(@Body() clientData: Client): Promise<Client> {
    return await this.clientRepository.save(clientData);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }
}
