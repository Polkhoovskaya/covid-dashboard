import { TotalCases } from './../../models/totalCases.model';
import { TotalCasesService } from './../../services/TotalCasesService';
import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [TotalCasesService]
})
export class ListComponent implements OnInit {
  totalCases: TotalCases[];
  globalData: TotalCases;

  myControl = new FormControl();
  filteredCountryOptions: Observable<TotalCases[]>;

  constructor(private totalCasesService: TotalCasesService) {
  }

  ngOnInit(): void {
    this.totalCasesService.getTotalCases().then((data: TotalCases[]) => {
      this.totalCases = data;
    });
    this.totalCasesService.getGlobalData().then((data: TotalCases) => {
      this.globalData = data;
    });

    this.filteredCountryOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => value ? this._filter(value) : null)
    );
  }

  private _filter(value: string): TotalCases[] {
    const filterValue = value.toLowerCase();
    return this.totalCases.filter(country => country.country.toLowerCase().indexOf(filterValue) === 0);
  }
}
