/* eslint-disable prettier/prettier */
export class LoanScore {
    constructor(public initialScore: number) {}
  
    toString(): string {
      return `LoanScore(initialScore=${this.initialScore})`;
    }
  }