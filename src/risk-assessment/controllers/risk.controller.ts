// src/risk/risk.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RiskService } from '../services/risk-assessment.service';

@Controller('risk')
export class RiskController {
  constructor(private readonly riskService: RiskService) {}

  @Post('assess')
  async assessRisk(@Body() data: any): Promise<any> {
    return this.riskService.assessRisk(data);
  }
}
