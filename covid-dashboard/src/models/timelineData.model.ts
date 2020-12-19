export class TimelineData {
  public confirmed: string;
  public deaths: string;
  public recovered: string;
  public date: number;

  constructor(confirmed: string, deaths: string, recovered: string, date: number) {
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.recovered = recovered;
    this.date = date;
  }
}
