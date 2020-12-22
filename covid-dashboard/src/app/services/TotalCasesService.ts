import { TotalCases } from './../models/totalCases.model';
export class TotalCasesService {

  public async getTotalCases() {
    return await fetch('https://disease.sh/v3/covid-19/countries').then(res => {
      return res.json();
    }).then(res => {
      let totalCases: TotalCases[] = res.map(item => {
        return {
          country: item.country,
          newConfirmed: item.todayCases,
          totalConfirmed: item.cases,
          casesPerOneMillion: item.casesPerOneMillion,
          newDeaths: item.todayDeaths,
          totalDeaths: item.deaths,
          deathsPerOneMillion: item.deathsPerOneMillion,
          newRecovered: item.todayRecovered,
          totalRecovered: item.recovered,
          recoveredPerOneMillion: item.recoveredPerOneMillion,
          date: item.updated,
          flag: item.countryInfo.flag,
          population: item.population,
          latitude: item.countryInfo.lat,
          longitude: item.countryInfo.long
        }
      });
      return totalCases;
    });
  }

  public async getGlobalData() {

    return await fetch('https://api.covid19api.com/summary').then(res => {
      return res.json();
    }).then(res => {
      let globalData: TotalCases = {
        newConfirmed: res.Global.NewConfirmed,
        totalConfirmed: res.Global.TotalConfirmed,
        newDeaths: res.Global.NewDeaths,
        totalDeaths: res.Global.TotalDeaths,
        newRecovered: res.Global.NewRecovered,
        totalRecovered: res.Global.TotalRecovered,
        date: res.Date
      }
      return globalData;
    });
  }
}