import { Component, OnInit } from '@angular/core';
import { Param, simpleFilterOptions } from 'src/app/core/models/filters.interface';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  parameters: SelectItem[];
  selectedParam: Param;

  constructor() {
    this.parameters = simpleFilterOptions;
  }

  ngOnInit(): void {
  }
}
