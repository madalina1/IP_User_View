export class WithdrawalInput{

  public nrSeriesId : string;
  public yearOfStudy : string;
  public currentYear : string;
  public course : string;


  constructor (public nr: string, public  year:string, public cYear : string, public _course : string) {
    this.nrSeriesId = nr;
    this.yearOfStudy = year;
    this.currentYear = cYear;
    this.course = _course;
  }
}