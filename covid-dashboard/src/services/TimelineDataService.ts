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

  public async getCountryTimelineData(id) {

    let myInit: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application\json',
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": true,
        // 'Accept': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    };
    let request = new Request("https://cors-anywhere.herokuapp.com/covid.amcharts.com/data/js/world_timeline.js", myInit);
    return await fetch(request).then(res => {
      return res.text();
    }).then(res => {
      let jsonData = res.substring(0, res.indexOf(']'));
      let jsonData2 = jsonData.substring(jsonData.indexOf('[') + 1, jsonData.length);
      debugger;
      let jsonObj = JSON.parse('[' + jsonData2 + ']');

      let countryTimelineDate: TimelineData[] = jsonObj.filter(item => item.id === id).map(item => {
        return {
          confirmed: item.confirmed,
          deaths: item.deaths,
          recovered: item.recovered,
          date: item.date
        }
      });
      return countryTimelineDate;
    });
  }
}
