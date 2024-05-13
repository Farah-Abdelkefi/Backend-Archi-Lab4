// loan-application.model.ts
import { PersonApplier } from './person-applier.model';

export class LoanApplication {
  constructor(
    public personApplier: PersonApplier,
    public loanAmount: number,
    public loanDuration: number,
    public loanPurpose: string
  ) {}

  toString(): string {
    return `LoanApplication(personApplier=${this.personApplier}, loanAmount=${this.loanAmount}, loanDuration=${this.loanDuration}, loanPurpose=${this.loanPurpose})`;
  }
}
