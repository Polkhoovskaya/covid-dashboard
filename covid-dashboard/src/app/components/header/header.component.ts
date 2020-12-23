import { Component, Input, OnInit } from '@angular/core';
import { TotalCases } from 'src/app/models/totalCases.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() globalData: TotalCases;
  constructor() { }

  ngOnInit(): void {
  }

}
