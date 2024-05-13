import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiskAssessmentService } from './risk-assessment/risk-assessment.service';
import { CommercialServiceService } from './commercial/commercial-service/commercial.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RiskAssessmentService, CommercialServiceService],
})
export class AppModule {}
