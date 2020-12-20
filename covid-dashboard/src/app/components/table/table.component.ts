
import { Component, OnInit } from '@angular/core';
import { TotalCasesService } from 'src/app/services/TotalCasesService';
import { TotalCases } from 'src/app/models/totalCases.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TotalCasesService]
})
export class TableComponent implements OnInit {

  numberSwitcherStatus: boolean = false;
  timeSwitcherStatus: boolean = false;
  windowMode: boolean = false;
  alignTabs: string = 'center';

  totalCases: TotalCases[];
  globalData: TotalCases;

  displayedColumns: string[] = ['country', 'data']; 

  constructor(private totalCasesService: TotalCasesService) { }

  ngOnInit(): void {
    this.totalCasesService.getTotalCases().then((data: TotalCases[]) => {
      this.totalCases = data;
    });
    this.totalCasesService.getGlobalData().then((data: TotalCases) => {
      this.globalData = data;
    });
  }
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