import { TimelineData } from './../models/timelineData.model';
export class TimelineDataService {

  public async getTotalTimelineData() {

    return await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(res => {
      return res.json();
    }).then(res => {

      let totalTimelineDate: TimelineData = {
        confirmed: Object.values(res.cases),
        deaths: Object.values(res.deaths),
        recovered: Object.values(res.recovered),
        date: Object.keys(res.cases)
      };

      return totalTimelineDate;
    });
  }

  public async getCountryTimelineData(country: string) {
    return await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`).then(res => {
      return res.json();
    }).then(res => {

      let countryTimelineDate: TimelineData = {
        confirmed: Object.values(res.timeline.cases),
        deaths: Object.values(res.timeline.deaths),
        recovered: Object.values(res.timeline.recovered),
        date: Object.keys(res.timeline.cases)
      };

      return countryTimelineDate;
    });

  }
}
