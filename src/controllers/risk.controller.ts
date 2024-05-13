/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { RiskAssessmentService } from '../risk-assessment/risk-assessment.service';

@Controller('risk')
export class RiskAssessmentController {
  constructor(private readonly riskAssessmentService: RiskAssessmentService) {}

  @Post('assess')
  async assessRisk(@Body() request: any): Promise<any> {
    return this.riskAssessmentService.assessRisk(request);
  }
}