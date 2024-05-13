import { Injectable } from '@nestjs/common';

@Injectable()
export class CommercialService {
  calculateScore(
    salary: number,
    financialSituation: string,
    age: number,
    loanAmount: number,
    loanDuration: number,
    loanPurpose: string
  ): number {
    let initialScore = 0;

    if (age >= 20 && age < 40) initialScore += 20;
    if (age >= 40 && age < 60) initialScore += 10;
    if (age >= 60 && age < 80) initialScore += 5;

    if (financialSituation === 'good') initialScore += 10;

    if (loanAmount <= 100000) initialScore += 20;
    else if (loanAmount < 200000) initialScore += 20;
    else if (loanAmount < 300000) initialScore += 10;
    else initialScore += 5;

    if (loanDuration >= 1 && loanDuration < 3) initialScore += 20;
    else if (loanDuration < 5) initialScore += 10;
    else initialScore += 5;

    if (loanPurpose === 'car') initialScore += 10;
    else if (loanPurpose === 'house') initialScore += 5;

    if (salary >= 1000 && salary < 2000) initialScore += 5;
    else if (salary < 3000) initialScore += 10;
    else initialScore += 20;

    return initialScore;
  }
}
