import { Component, OnInit, Input } from '@angular/core';
import { TimelineData } from 'src/app/models/timelineData.model';
import { TimelineDataService } from 'src/app/services/TimelineDataService';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  providers: [TimelineDataService]
})

export class GraphComponent implements OnInit {
  @Input() country: string;

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
