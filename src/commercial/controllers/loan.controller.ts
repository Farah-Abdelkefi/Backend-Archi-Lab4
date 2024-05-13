// src/controllers/loan.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommercialService } from '../commercial-service/commercial.service';
import { PersonApplier } from '../entities/person-applier.model';
import { LoanApplication } from '../entities/loan-application.model';

@Controller()
export class LoanController {
  constructor(private readonly commercialService: CommercialService) {}

  @Get()
  index(): string {
    return '<h1>Welcome to The Commercial Service</h1>';
  }

  @Post('postform')
  processJson(@Body() json: any): any {
    const personApplier = new PersonApplier(
      json.firstname,
      json.lastname,
      json.salary,
      json.financialSituation,
      json.age
    );

    const loanApplication = new LoanApplication(
      personApplier,
      json.loanAmount,
      json.loanDuration,
      json.loanPurpose
    );

    json.initialScore = this.commercialService.calculateScore(
      personApplier.salary,
      personApplier.financialSituation,
      personApplier.age,
      loanApplication.loanAmount,
      loanApplication.loanDuration,
      loanApplication.loanPurpose
    );

    return json;
  }
}
