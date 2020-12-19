import { TimelineData } from './../../models/timelineData.model';
import { TimelineDataService } from './../../services/TimelineDataService';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  providers: [TimelineDataService]
})

export class GraphComponent implements OnInit {

  totalTimelineDate: TimelineData[];

  constructor(private timelineDataService: TimelineDataService) { }

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'Confirmed' },
    { data: [], label: 'Deaths' },
    { data: [], label: 'Recovered' }
  ];

  ngOnInit(): void {

    this.timelineDataService.getTotalTimelineData().then((data: TimelineData[]) => {
      this.totalTimelineDate = data;
      this.totalTimelineDate.map(i => {
        this.lineChartLabels.push(i.date);
        this.lineChartData[0].data.push(i.confirmed);
        this.lineChartData[1].data.push(i.deaths);
        this.lineChartData[2].data.push(i.recovered);
      });
    });

    this.timelineDataService.getCountryTimelineData("GB").then((data: TimelineData[]) => {
      console.log(data);
    });
  }
}
