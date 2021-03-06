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

  totalTimelineDate: TimelineData;
  windowMode: boolean = false;

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

    this.timelineDataService.getTotalTimelineData().then((data: TimelineData) => {
      this.totalTimelineDate = data;

      this.lineChartLabels = data.date;
      this.lineChartData[0].data = data.confirmed;
      this.lineChartData[1].data = data.deaths;
      this.lineChartData[2].data = data.recovered;
    });
  }

  ngOnChanges() {

    this.country &&
      this.timelineDataService.getCountryTimelineData(this.country).then((data: TimelineData) => {
        this.totalTimelineDate = data;

        this.lineChartLabels = data.date;
        this.lineChartData[0].data = data.confirmed;
        this.lineChartData[1].data = data.deaths;
        this.lineChartData[2].data = data.recovered;
      });
  }

  windowModeSwitcher(): void {
    this.windowMode = !this.windowMode
  }
}
