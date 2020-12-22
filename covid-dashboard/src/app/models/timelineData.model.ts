export class TimelineData {
  public confirmed: Array<number>;
  public deaths: Array<number>;
  public recovered: Array<number>;
  public date: Array<string>;

  constructor(confirmed: Array<number>, deaths: Array<number>, recovered: Array<number>, date: Array<string>) {
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.recovered = recovered;
    this.date = date;
  }
}
