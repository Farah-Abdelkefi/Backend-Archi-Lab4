/* eslint-disable prettier/prettier */
export class PersonApplier {
    constructor(
      public firstname: string,
      public lastname: string,
      public salary: number,
      public financialSituation: string,
      public age: number
    ) {}
  
    toString(): string {
      return `PersonApplier(firstname=${this.firstname}, lastname=${this.lastname}, salary=${this.salary}, financialSituation=${this.financialSituation}, age=${this.age})`;
    }
  }