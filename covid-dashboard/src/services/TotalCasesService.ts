import { TotalCases } from './../models/totalCases.model';
export class TotalCasesService {

  public async getTotalCases() {
    return await fetch('https://api.covid19api.com/summary').then(res => {
      return res.json();
    }).then(res => {
      let totalCases: TotalCases[] = res.Countries.map(item => {
        return {
          country: item.Country,
          newConfirmed: item.NewConfirmed,
          totalConfirmed: item.TotalConfirmed,
          newDeaths: item.NewDeaths,
          totalDeaths: item.TotalDeaths,
          newRecovered: item.NewRecovered,
          totalRecovered: item.TotalRecovered,
          date: item.Date
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
