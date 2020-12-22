
import { Component, OnInit, Input } from '@angular/core';
import { TotalCases } from 'src/app/models/totalCases.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  numberSwitcherStatus: boolean = false;
  timeSwitcherStatus: boolean = false;
  windowMode: boolean = false;
  alignTabs: string = 'center';

  @Input() totalCases: TotalCases[];
  @Input() globalData: TotalCases;
  @Input() currentCountryInf: TotalCases;

  displayedColumns: string[] = ['country', 'data'];

  constructor() { }

  ngOnInit(): void { }
  numbersSwitcher(): void {
    this.numberSwitcherStatus = !this.numberSwitcherStatus
  }
  timeSwitcher(): void {
    this.timeSwitcherStatus = !this.timeSwitcherStatus
  }
  windowModeSwitcher(): void {
    this.windowMode = !this.windowMode
    if (this.windowMode === false) {
      this.alignTabs = 'center'
    } else {
      this.alignTabs = 'left'
    }
  }
}
