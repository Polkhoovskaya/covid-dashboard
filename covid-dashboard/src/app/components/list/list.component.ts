import { TotalCases } from '../../models/total-cases.model';
import { TotalCasesService } from '../../services/total-cases.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [TotalCasesService]
})
export class ListComponent implements OnInit {
  totalCases: TotalCases[];
  globalData: TotalCases;

  constructor(private totalCasesService: TotalCasesService) {
  }

  ngOnInit(): void {
    this.totalCasesService.getTotalCases().then((data: TotalCases[]) => {
      this.totalCases = data;
    });
    this.totalCasesService.getGlobalData().then((data: TotalCases) => {
      this.globalData = data;
    });
  }
}
