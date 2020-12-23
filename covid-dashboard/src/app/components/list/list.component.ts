import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TotalCases } from 'src/app/models/totalCases.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() onChooseCountry = new EventEmitter<string>();

  @Input() countryName: string;
  @Input() totalCases: TotalCases[];
  @Input() globalData: TotalCases;

  myControl = new FormControl();
  filteredCountryOptions: Observable<TotalCases[]>;
  windowMode: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.filteredCountryOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => value ? this._filter(value) : null)
    );
  }

  private _filter(value: string): TotalCases[] {
    const filterValue = value.toLowerCase();
    return this.totalCases.filter(country => country.country.toLowerCase().indexOf(filterValue) === 0);
  }

  private onSelectCountry(country: string) {
    this.onChooseCountry.emit(country);
  }

  windowModeSwitcher(): void {
    this.windowMode = !this.windowMode
  }
}
