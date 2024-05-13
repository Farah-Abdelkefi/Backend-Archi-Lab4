// src/services/loan-calculator.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommercialServiceService {
  calculateScore(
    salary: number,
    financialSituation: string,
    age: number,
    loanAmount: number,
    loanDuration: number,
    loanPurpose: string
  ): number {
    let initialScore = 0;

    if (age < 20) {
      initialScore += 0;
    } else if (age >= 20 && age < 40) {
      initialScore += 20;
    } else if (age >= 40 && age < 60) {
      initialScore += 10;
    } else if (age >= 60 && age < 80) {
      initialScore += 5;
    } else if (age >= 80) {
      initialScore += 0;
    }

    if (financialSituation === 'good') {
      initialScore += 10;
    } else if (financialSituation === 'bad') {
      initialScore += 0;
    }

    if (loanAmount <= 100000) {
      initialScore += 20;
    } else if (loanAmount >= 100000 && loanAmount < 200000) {
      initialScore += 20;
    } else if (loanAmount >= 200000 && loanAmount < 300000) {
      initialScore += 10;
    } else if (loanAmount >= 300000) {
      initialScore += 5;
    }

    if (loanDuration >= 1 && loanDuration < 3) {
      initialScore += 20;
    } else if (loanDuration >= 3 && loanDuration < 5) {
      initialScore += 10;
    }

  }
}