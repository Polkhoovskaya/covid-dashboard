import { TimelineData } from './../models/timelineData.model';
export class TimelineDataService {

  public async getTotalTimelineData() {

    let myInit: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application\json'
      },
      mode: 'cors',
      cache: 'default'
    };
    let request = new Request("https://cors-anywhere.herokuapp.com/covid.amcharts.com/data/js/total_timeline.js", myInit);
    return await fetch(request).then(res => {
      return res.text();
    }).then(res => {

      let jsonData = res.split('[')[1].split(']')[0];
      let jsonObj = JSON.parse('[' + jsonData + ']');

      let totalTimelineDate: TimelineData[] = jsonObj.map(item => {
        return {
          confirmed: item.confirmed,
          deaths: item.deaths,
          recovered: item.recovered,
          date: item.date
        }
      });
      return totalTimelineDate;
    });
  }
}
