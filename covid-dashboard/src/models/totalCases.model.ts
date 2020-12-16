export class TotalCases {
  public country?: string;
  public newConfirmed: string;
  public totalConfirmed: string;
  public newDeaths: string;
  public totalDeaths: string;
  public newRecovered: string;
  public totalRecovered: string;
  public date: string;

  constructor(country: string, newConfirmed: string, totalConfirmed: string, newDeaths: string, totalDeaths: string, newRecovered: string, totalRecovered: string, date: string) {
    this.country = country;
    this.newConfirmed = newConfirmed;
    this.totalConfirmed = totalConfirmed;
    this.newDeaths = newDeaths;
    this.totalDeaths = totalDeaths;
    this.newRecovered = newRecovered;
    this.totalRecovered = totalRecovered;
    this.date = date;
  }
}
