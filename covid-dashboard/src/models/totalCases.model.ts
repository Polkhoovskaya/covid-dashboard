export class TotalCases {
  public country?: string;
  public newConfirmed: string;
  public totalConfirmed: string;
  public casesPerOneMillion?: string;
  public newDeaths: string;
  public totalDeaths: string;
  public deathsPerOneMillion?: string;
  public newRecovered: string;
  public totalRecovered: string;
  public recoveredPerOneMillion?: string;
  public date: number;
  public flag?: string;
  public population?: number;
  public latitude?: number;
  public longitude?: number;


  constructor(country: string, newConfirmed: string, totalConfirmed: string, casesPerOneMillion: string,
    newDeaths: string, totalDeaths: string, deathsPerOneMillion: string, newRecovered: string,
    totalRecovered: string, recoveredPerOneMillion: string, date: number, flag: string,
    population: number, latitude: number, longitude: number) {
    this.country = country;
    this.newConfirmed = newConfirmed;
    this.totalConfirmed = totalConfirmed;
    this.casesPerOneMillion = casesPerOneMillion;
    this.newDeaths = newDeaths;
    this.totalDeaths = totalDeaths;
    this.deathsPerOneMillion = deathsPerOneMillion;
    this.newRecovered = newRecovered;
    this.totalRecovered = totalRecovered;
    this.recoveredPerOneMillion = recoveredPerOneMillion;
    this.date = date;
    this.flag = flag;
    this.population = population;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
