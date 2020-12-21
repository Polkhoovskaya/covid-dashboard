import { Component, OnInit } from '@angular/core';
import { TotalCasesService } from 'src/app/services/TotalCasesService';
import { TotalCases } from 'src/app/models/totalCases.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [TotalCasesService]
})
export class ContentComponent implements OnInit {

  totalCases: TotalCases[];
  globalData: TotalCases;
  curentCountry: string;
  currentCountryInformation: TotalCases;

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

  public onSelectCountry(country: string) {
    this.curentCountry = country;
    this.currentCountryInformation = this.totalCases.find(el => el.country.toLowerCase() === country.toLowerCase());
  }
}
